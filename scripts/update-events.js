#!/usr/bin/env node

/**
 * Voice Update Script - Events
 * Updates farm events based on voice commands
 * Used for announcing special events, farmers markets, tours, etc.
 */

const fs = require('fs').promises;
const path = require('path');

const updates = JSON.parse(process.argv[2] || process.env.VOICE_UPDATE_DATA || '{}');

async function updateEvents(updates) {
  try {
    const eventsPath = path.join(process.cwd(), 'src/content/events.json');
    
    // Ensure file exists
    await ensureEventsFile(eventsPath);
    
    // Read current events
    const currentData = JSON.parse(await fs.readFile(eventsPath, 'utf8'));
    
    // Apply updates based on action
    switch (updates.action) {
      case 'add':
        // Add new event
        currentData.events.push({
          id: generateId(updates.title),
          title: updates.title,
          date: updates.date,
          time: updates.time,
          description: updates.description,
          location: updates.location || 'At the farm',
          type: updates.type || 'general',
          active: true,
          createdDate: new Date().toISOString()
        });
        break;
        
      case 'cancel':
        // Cancel an event
        const cancelIndex = currentData.events.findIndex(
          e => e.title.toLowerCase() === updates.title.toLowerCase()
        );
        if (cancelIndex !== -1) {
          currentData.events[cancelIndex].active = false;
          currentData.events[cancelIndex].cancelledDate = new Date().toISOString();
          currentData.events[cancelIndex].cancelReason = updates.reason || 'Event cancelled';
        }
        break;
        
      case 'update':
        // Update event details
        const updateIndex = currentData.events.findIndex(
          e => e.title.toLowerCase() === updates.title.toLowerCase()
        );
        if (updateIndex !== -1) {
          if (updates.newDate) currentData.events[updateIndex].date = updates.newDate;
          if (updates.newTime) currentData.events[updateIndex].time = updates.newTime;
          if (updates.newDescription) currentData.events[updateIndex].description = updates.newDescription;
          currentData.events[updateIndex].lastUpdated = new Date().toISOString();
        }
        break;
        
      case 'remove_past':
        // Remove events older than 30 days
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
        currentData.events = currentData.events.filter(event => {
          return new Date(event.date) > thirtyDaysAgo;
        });
        break;
    }
    
    // Sort events by date
    currentData.events.sort((a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });
    
    // Update metadata
    currentData.lastUpdated = new Date().toISOString();
    currentData.updateSource = 'voice';
    currentData.updateId = updates.callId || 'manual';
    
    // Write updated data
    await fs.writeFile(
      eventsPath,
      JSON.stringify(currentData, null, 2)
    );
    
    console.log('Events updated successfully:', {
      action: updates.action,
      event: updates.title,
      timestamp: currentData.lastUpdated
    });
    
    return { success: true, data: currentData };
    
  } catch (error) {
    console.error('Error updating events:', error);
    return { success: false, error: error.message };
  }
}

// Helper function to generate event ID
function generateId(title) {
  return title.toLowerCase().replace(/\s+/g, '-') + '-' + Date.now();
}

// Ensure events file exists with default structure
async function ensureEventsFile(filePath) {
  try {
    await fs.access(filePath);
  } catch {
    // File doesn't exist, create it
    const defaultStructure = {
      events: [],
      lastUpdated: new Date().toISOString(),
      updateSource: "initial"
    };
    
    await fs.mkdir(path.dirname(filePath), { recursive: true });
    await fs.writeFile(filePath, JSON.stringify(defaultStructure, null, 2));
  }
}

// Example event structure
const exampleEvent = {
  "id": "fall-harvest-festival-1234567890",
  "title": "Fall Harvest Festival",
  "date": "2024-10-15",
  "time": "10:00 AM - 4:00 PM",
  "description": "Join us for apple cider, pumpkin picking, and hayrides!",
  "location": "At the farm",
  "type": "festival",
  "active": true,
  "createdDate": "2024-09-01T10:00:00Z"
};

// Example events.json structure
const exampleStructure = {
  "events": [
    {
      "id": "farmers-market-saturday-1234567890",
      "title": "Preston County Farmers Market",
      "date": "2024-03-18",
      "time": "8:00 AM - 12:00 PM",
      "description": "Find us at the Preston County Farmers Market with fresh produce and eggs",
      "location": "Downtown Kingwood",
      "type": "market",
      "active": true
    },
    {
      "id": "farm-tour-1234567891",
      "title": "Spring Farm Tour",
      "date": "2024-04-20",
      "time": "2:00 PM",
      "description": "Free guided tour of the farm. Great for families!",
      "location": "At the farm",
      "type": "tour",
      "active": true
    }
  ],
  "lastUpdated": "2024-03-15T10:30:00Z",
  "updateSource": "voice",
  "updateId": "call_345678"
};

// Run if called directly
if (require.main === module) {
  updateEvents(updates).then(result => {
    process.exit(result.success ? 0 : 1);
  });
}

module.exports = { updateEvents };