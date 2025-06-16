# 🔧 Fix GitHub Repository Description for Restaurant Template

## The Issue

When we copied the farm template to create the restaurant template, it brought along the `.git` directory containing all the farm template's git history and repository information. This is why GitHub shows "Farm & Orchard Template" - it's still connected to the original farm repository.

## Solution Steps

### 1. Remove the Old Git Repository
```bash
cd N:\appalachian-connect-restaurant-template
Remove-Item .git -Recurse -Force
```

### 2. Initialize a Fresh Git Repository
```bash
git init
git add .
git commit -m "Initial commit: AppalachianConnect Restaurant Template"
```

### 3. Create a New GitHub Repository
1. Go to GitHub and create a new repository
2. Name it something like `appalachian-restaurant-template`
3. Set description: "Restaurant & Diner template for AppalachianConnect - Voice-powered websites for rural restaurants"
4. Make it public or private as needed
5. Don't initialize with README (we already have one)

### 4. Connect and Push
```bash
git remote add origin https://github.com/YOUR-USERNAME/appalachian-restaurant-template.git
git branch -M main
git push -u origin main
```

### 5. Update Any References
If you have the old farm repository URL referenced anywhere (like in deployment settings), update it to the new restaurant repository URL.

## What This Fixes

- ✅ GitHub will show the correct repository name
- ✅ Description will be restaurant-specific
- ✅ Clean commit history starting from the restaurant template
- ✅ No confusion about which template this is
- ✅ Separate repository for separate template

## Alternative: Update Existing Repository

If you want to keep using the same repository but fix the description:

1. Go to the repository on GitHub
2. Click the gear icon next to "About"
3. Update the description to: "Restaurant & Diner template for AppalachianConnect - Voice-powered websites for rural restaurants"
4. Update the repository name if needed in Settings

However, I recommend creating a separate repository to keep things clean and organized.
