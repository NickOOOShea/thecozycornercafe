#!/bin/bash

# AppalachianConnect Farm Template - Build Diagnostic Script
# This script helps diagnose build issues

echo "🔍 Running build diagnostics..."
echo "================================================="

# Change to project directory
cd "N:\appalachian-connect-farm-template"

echo ""
echo "1. Checking for node_modules..."
if [ -d "node_modules" ]; then
    echo "✅ node_modules exists"
else
    echo "❌ node_modules NOT FOUND - Run 'npm install' first"
    exit 1
fi

echo ""
echo "2. Checking for required files..."
files=("package.json" "next.config.js" "tsconfig.json" "tailwind.config.js" "next-env.d.ts")
for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file exists"
    else
        echo "❌ $file NOT FOUND"
    fi
done

echo ""
echo "3. Running TypeScript check..."
npx tsc --noEmit
if [ $? -eq 0 ]; then
    echo "✅ TypeScript check passed"
else
    echo "❌ TypeScript errors found"
fi

echo ""
echo "4. Checking for missing dependencies..."
npm ls
if [ $? -eq 0 ]; then
    echo "✅ All dependencies resolved"
else
    echo "⚠️  Some dependencies may have issues"
fi

echo ""
echo "5. Running Next.js build..."
npm run build
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "Check the 'out' directory for static files"
else
    echo "❌ Build failed"
    echo "Check the error messages above"
fi

echo ""
echo "================================================="
echo "Diagnostic complete!"
