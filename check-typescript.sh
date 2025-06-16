#!/bin/bash

# AppalachianConnect Farm Template - TypeScript Check Script
# This script performs a comprehensive TypeScript check on all components

echo "🔍 Running TypeScript type check on all components..."
echo "================================================="

# Change to project directory
cd "N:\appalachian-connect-farm-template"

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "❌ ERROR: node_modules not found!"
    echo "Please run 'npm install' first"
    exit 1
fi

# Run TypeScript compiler in no-emit mode to check for errors
echo "Running tsc --noEmit..."
npx tsc --noEmit

# Check exit code
if [ $? -eq 0 ]; then
    echo "✅ SUCCESS: All TypeScript checks passed!"
else
    echo "❌ ERROR: TypeScript errors found!"
    exit 1
fi

echo ""
echo "📋 Component Checklist:"
echo "✅ HoursDisplay.tsx - Fixed array indexing type"
echo "✅ AnnouncementBanner.tsx - Fixed announcement type assignment"  
echo "✅ SeasonalMessage.tsx - Fixed variable type declarations"
echo "✅ global.d.ts - Added Netlify form attribute types"
echo ""
echo "🎯 All components type-checked and ready for deployment!"
