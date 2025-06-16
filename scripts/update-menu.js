#!/usr/bin/env node

/**
 * Voice Update Script - Menu Items
 * Updates restaurant menu items based on voice commands
 * Example: "The meatloaf is sold out" or "Add chicken pot pie special for $12.99"
 */

const fs = require('fs').promises;
const path = require('path');

const updates = JSON.parse(process.argv[2] || process.env.VOICE_UPDATE_DATA || '{}');

async function updateMenu(updates) {
  try {
    const menuPath = path.join(process.cwd(), 'src/content/menu');
    
    // Determine which menu file to update
    const menuFile = updates.menuSection || determineMenuSection(updates.itemName || updates.name);
    const filePath = path.join(menuPath, `${menuFile}.json`);
    
    // Ensure file exists
    await ensureMenuFile(filePath, menuFile);
    
    // Read current menu
    const currentData = JSON.parse(await fs.readFile(filePath, 'utf8'));
    
    // Apply updates based on action
    switch (updates.action) {
      case 'add':
        // Add new menu item
        currentData.items.push({
          id: generateId(updates.name),
          name: updates.name,
          price: parseFloat(updates.price),
          description: updates.description || '',
          category: menuFile,
          available: true,
          featured: updates.featured || false,
          dietary: updates.dietary || [],
          addedDate: new Date().toISOString()
        });
        break;
        
      case 'update_price':
        // Update price of existing item
        const priceIndex = currentData.items.findIndex(
          item => item.name.toLowerCase() === updates.name.toLowerCase()
        );
        if (priceIndex !== -1) {
          currentData.items[priceIndex].price = parseFloat(updates.price);
          currentData.items[priceIndex].lastPriceUpdate = new Date().toISOString();
        }
        break;
        
      case 'mark_sold_out':
      case 'sold_out':
        // Mark item as sold out
        const soldOutIndex = currentData.items.findIndex(
          item => item.name.toLowerCase() === updates.name.toLowerCase()
        );
        if (soldOutIndex !== -1) {
          currentData.items[soldOutIndex].available = false;
          currentData.items[soldOutIndex].soldOutDate = new Date().toISOString();
        }
        break;
        
      case 'mark_available':
      case 'back_in_stock':
        // Mark item as available again
        const availableIndex = currentData.items.findIndex(
          item => item.name.toLowerCase() === updates.name.toLowerCase()
        );
        if (availableIndex !== -1) {
          currentData.items[availableIndex].available = true;
          delete currentData.items[availableIndex].soldOutDate;
        }
        break;
        
      case 'remove':
        // Remove item from menu
        currentData.items = currentData.items.filter(
          item => item.name.toLowerCase() !== updates.name.toLowerCase()
        );
        break;
        
      case 'feature':
        // Mark item as featured
        const featureIndex = currentData.items.findIndex(
          item => item.name.toLowerCase() === updates.name.toLowerCase()
        );
        if (featureIndex !== -1) {
          currentData.items[featureIndex].featured = true;
        }
        break;
        
      case 'update_description':
        // Update item description
        const descIndex = currentData.items.findIndex(
          item => item.name.toLowerCase() === updates.name.toLowerCase()
        );
        if (descIndex !== -1) {
          currentData.items[descIndex].description = updates.description;
        }
        break;
    }
    
    // Update metadata
    currentData.lastUpdated = new Date().toISOString();
    currentData.updateSource = 'voice';
    currentData.updateId = updates.callId || 'manual';
    
    // Sort items by availability then name
    currentData.items.sort((a, b) => {
      if (a.available !== b.available) {
        return a.available ? -1 : 1;
      }
      return a.name.localeCompare(b.name);
    });
    
    // Write updated data
    await fs.writeFile(
      filePath,
      JSON.stringify(currentData, null, 2)
    );
    
    console.log('Menu updated successfully:', {
      action: updates.action,
      item: updates.name,
      section: menuFile,
      timestamp: currentData.lastUpdated
    });
    
    return { success: true, data: currentData };
    
  } catch (error) {
    console.error('Error updating menu:', error);
    return { success: false, error: error.message };
  }
}

// Helper function to determine menu section from item name
function determineMenuSection(itemName) {
  const name = itemName.toLowerCase();
  
  // Breakfast keywords
  if (name.includes('egg') || name.includes('pancake') || name.includes('french toast') ||
      name.includes('omelet') || name.includes('biscuit') || name.includes('gravy') ||
      name.includes('breakfast')) {
    return 'breakfast';
  }
  
  // Dessert keywords
  if (name.includes('pie') || name.includes('cake') || name.includes('ice cream') ||
      name.includes('cookie') || name.includes('brownie') || name.includes('dessert')) {
    return 'desserts';
  }
  
  // Sides keywords
  if (name.includes('fries') || name.includes('salad') || name.includes('coleslaw') ||
      name.includes('mashed') || name.includes('vegetable') || name.includes('side')) {
    return 'sides';
  }
  
  // Default to lunch-dinner
  return 'lunch-dinner';
}

// Helper function to generate menu item ID
function generateId(name) {
  return name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

// Ensure menu file exists with default structure
async function ensureMenuFile(filePath, category) {
  try {
    await fs.access(filePath);
  } catch {
    // File doesn't exist, create it
    const defaultStructure = {
      category: category.charAt(0).toUpperCase() + category.slice(1),
      description: `Our ${category} menu`,
      items: [],
      lastUpdated: new Date().toISOString(),
      updateSource: "initial"
    };
    
    await fs.mkdir(path.dirname(filePath), { recursive: true });
    await fs.writeFile(filePath, JSON.stringify(defaultStructure, null, 2));
  }
}

// Example voice commands this script handles:
const exampleCommands = [
  "The meatloaf is sold out",
  "Add chicken pot pie as today's special for twelve ninety-nine",
  "Change the price of the burger to ten fifty",
  "We have apple pie back in stock",
  "Remove the fish sandwich from the menu",
  "Feature the ribeye steak special"
];

// Run if called directly
if (require.main === module) {
  updateMenu(updates).then(result => {
    process.exit(result.success ? 0 : 1);
  });
}

module.exports = { updateMenu };
