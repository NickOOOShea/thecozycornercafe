#!/usr/bin/env node

/**
 * Update Restaurant Daily Specials via Voice Commands
 * 
 * This script processes natural language commands to update daily specials
 * 
 * Example commands:
 * - "Today's special is chicken and dumplings for $13.99"
 * - "Add meatloaf special for $12.99 on Friday"
 * - "Remove the fish special"
 * - "Wednesday special is country fried steak for $14.99"
 */

const fs = require('fs').promises;
const path = require('path');

// Path to specials file
const SPECIALS_FILE = path.join(__dirname, '..', 'src', 'content', 'specials.json');

// Days mapping
const DAYS = {
  'monday': 0,
  'tuesday': 1,
  'wednesday': 2,
  'thursday': 3,
  'friday': 4,
  'saturday': 5,
  'sunday': 6,
  'today': new Date().getDay(),
  'tomorrow': (new Date().getDay() + 1) % 7
};

// Price extraction regex
const PRICE_REGEX = /\$?(\d+\.?\d*)/;

async function loadSpecials() {
  try {
    const data = await fs.readFile(SPECIALS_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    // Return default structure if file doesn't exist
    return {
      dailySpecials: [],
      lastUpdated: new Date().toISOString()
    };
  }
}

async function saveSpecials(specials) {
  specials.lastUpdated = new Date().toISOString();
  await fs.writeFile(SPECIALS_FILE, JSON.stringify(specials, null, 2));
  console.log('✅ Specials updated successfully!');
}

function parseCommand(command) {
  const lowerCommand = command.toLowerCase();
  
  // Check for remove command
  if (lowerCommand.includes('remove') || lowerCommand.includes('delete')) {
    return { action: 'remove', command: lowerCommand };
  }
  
  // Check for clear all command
  if (lowerCommand.includes('clear all') || lowerCommand.includes('no specials')) {
    return { action: 'clear', command: lowerCommand };
  }
  
  // Parse add/update command
  let day = null;
  let dayName = null;
  
  // Find day in command
  for (const [name, index] of Object.entries(DAYS)) {
    if (lowerCommand.includes(name)) {
      day = index;
      dayName = name;
      break;
    }
  }
  
  // Extract price
  const priceMatch = command.match(PRICE_REGEX);
  const price = priceMatch ? parseFloat(priceMatch[1]) : null;
  
  // Extract item name (between "special is" and price or end)
  let itemName = '';
  const specialIsMatch = lowerCommand.match(/special(?:s)?\s+(?:is|are)\s+(.+?)(?:\s+for\s+\$?\d+|$)/);
  if (specialIsMatch) {
    itemName = specialIsMatch[1].trim();
    // Capitalize properly
    itemName = itemName.split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
  
  return {
    action: 'update',
    day,
    dayName,
    itemName,
    price
  };
}

async function processVoiceCommand(command) {
  console.log(`\n🎤 Processing: "${command}"`);
  
  const parsed = parseCommand(command);
  const specials = await loadSpecials();
  
  switch (parsed.action) {
    case 'clear':
      specials.dailySpecials = [];
      console.log('🧹 Cleared all specials');
      break;
      
    case 'remove':
      if (parsed.command.includes('today')) {
        const today = new Date().getDay();
        specials.dailySpecials = specials.dailySpecials.filter(s => s.day !== today);
        console.log('🗑️ Removed today\'s special');
      } else {
        // Remove by item name
        const beforeCount = specials.dailySpecials.length;
        specials.dailySpecials = specials.dailySpecials.filter(s => 
          !parsed.command.includes(s.name.toLowerCase())
        );
        if (beforeCount > specials.dailySpecials.length) {
          console.log('🗑️ Removed matching special(s)');
        }
      }
      break;
      
    case 'update':
      if (parsed.day !== null && parsed.itemName && parsed.price) {
        // Remove existing special for this day
        specials.dailySpecials = specials.dailySpecials.filter(s => s.day !== parsed.day);
        
        // Add new special
        specials.dailySpecials.push({
          day: parsed.day,
          dayName: getDayName(parsed.day),
          name: parsed.itemName,
          price: parsed.price,
          description: `Our famous ${parsed.itemName.toLowerCase()}`
        });
        
        // Sort by day
        specials.dailySpecials.sort((a, b) => a.day - b.day);
        
        console.log(`📝 Set ${getDayName(parsed.day)}'s special: ${parsed.itemName} - $${parsed.price.toFixed(2)}`);
      } else {
        console.log('❌ Could not parse special. Make sure to include day, item, and price.');
        return;
      }
      break;
  }
  
  await saveSpecials(specials);
}

function getDayName(dayIndex) {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[dayIndex];
}

// Example commands to demonstrate
async function runExamples() {
  const examples = [
    "Today's special is chicken and dumplings for $13.99",
    "Wednesday special is country fried steak for $14.99",
    "Friday special is fish fry for $15.99",
    "Remove the fish special",
    "Tomorrow's special is pot roast for $16.99"
  ];
  
  console.log('🍽️ Restaurant Daily Specials Voice Update System\n');
  console.log('Example commands:');
  examples.forEach(ex => console.log(`  - "${ex}"`));
  console.log('\n---');
  
  // Process command from command line or use example
  const command = process.argv[2] || examples[0];
  await processVoiceCommand(command);
}

// Run the script
runExamples().catch(console.error);
