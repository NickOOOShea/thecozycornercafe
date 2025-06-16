#!/usr/bin/env node

/**
 * Voice Update Script - Business Hours
 * Updates the hours.json file based on voice command input
 */

const fs = require('fs').promises;
const path = require('path');

// Parse command line arguments or environment variables
const updates = JSON.parse(process.argv[2] || process.env.VOICE_UPDATE_DATA || '{}');

async function updateHours(updates) {
  try {
    // Read current hours
    const hoursPath = path.join(process.cwd(), 'src/content/hours.json');
    const currentData = JSON.parse(await fs.readFile(hoursPath, 'utf8'));
    
    // Apply updates based on type
    if (updates.type === 'regular_hours') {
      // Update regular hours
      // Example: { day: 'monday', open: '9:00 AM', close: '5:00 PM' }
      if (updates.day && updates.hours) {
        currentData.regular[updates.day.toLowerCase()] = updates.hours;
      }
    } else if (updates.type === 'temporary_closure') {
      // Add temporary closure
      // Example: { date: '2024-12-25', reason: 'Christmas', closed: true }
      currentData.exceptions.push({
        date: updates.date,
        reason: updates.reason,
        hours: updates.hours || { closed: true }
      });
    } else if (updates.type === 'all_week') {
      // Update all weekdays
      // Example: { open: '8:00 AM', close: '6:00 PM' }
      const weekdays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
      weekdays.forEach(day => {
        currentData.regular[day] = {
          open: updates.open,
          close: updates.close
        };
      });
    }
    
    // Update metadata
    currentData.lastUpdated = new Date().toISOString();
    currentData.updateSource = 'voice';
    currentData.updateId = updates.callId || 'manual';
    
    // Clean old exceptions (older than 30 days)
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    currentData.exceptions = currentData.exceptions.filter(exception => {
      return new Date(exception.date) > thirtyDaysAgo;
    });
    
    // Write updated data
    await fs.writeFile(
      hoursPath,
      JSON.stringify(currentData, null, 2)
    );
    
    // Log success
    console.log('Hours updated successfully:', {
      type: updates.type,
      timestamp: currentData.lastUpdated
    });
    
    return { success: true, data: currentData };
    
  } catch (error) {
    console.error('Error updating hours:', error);
    return { success: false, error: error.message };
  }
}

// Example hours.json structure:
const exampleStructure = {
  "regular": {
    "monday": { "open": "9:00 AM", "close": "5:00 PM" },
    "tuesday": { "open": "9:00 AM", "close": "5:00 PM" },
    "wednesday": { "open": "9:00 AM", "close": "5:00 PM" },
    "thursday": { "open": "9:00 AM", "close": "5:00 PM" },
    "friday": { "open": "9:00 AM", "close": "6:00 PM" },
    "saturday": { "open": "8:00 AM", "close": "2:00 PM" },
    "sunday": { "closed": true }
  },
  "exceptions": [
    {
      "date": "2024-12-25",
      "reason": "Christmas Day",
      "hours": { "closed": true }
    },
    {
      "date": "2024-12-24",
      "reason": "Christmas Eve",
      "hours": { "open": "9:00 AM", "close": "2:00 PM" }
    }
  ],
  "lastUpdated": "2024-03-15T10:30:00Z",
  "updateSource": "voice",
  "updateId": "call_123456"
};

// Run if called directly
if (require.main === module) {
  updateHours(updates).then(result => {
    process.exit(result.success ? 0 : 1);
  });
}

module.exports = { updateHours };