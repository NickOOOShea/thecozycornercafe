# 🚨 NETLIFY BUILD FIX - AppalachianConnect Farm Template

## Build Error Fix Checklist

### ✅ Fixed Issues:

1. **next-env.d.ts** - Created missing file (CRITICAL for Next.js TypeScript)
2. **next.config.js** - Updated with proper build configuration
3. **All TypeScript errors** - Fixed in all components
4. **SSR issues** - Fixed localStorage and dynamic imports
5. **FormData types** - Fixed in checkout page

### 📋 Pre-Deployment Commands:

Run these commands IN ORDER:

```bash
# 1. Navigate to project
cd N:\appalachian-connect-farm-template

# 2. Clean install dependencies
rm -rf node_modules package-lock.json
npm install

# 3. Run type check
npm run type-check

# 4. Test build locally
npm run build

# 5. Check if 'out' directory was created
ls out
```

### 🔧 If Build Still Fails:

1. **Check Node Version**
   - Netlify uses Node 20 (specified in netlify.toml)
   - Ensure local Node version matches: `node --version`

2. **Clear Netlify Cache**
   - In Netlify dashboard: Deploys → Trigger deploy → Clear cache and deploy site

3. **Environment Variables**
   - None required for this template
   - NODE_VERSION=20 is set in netlify.toml

### 📝 Netlify Configuration Verification:

Your `netlify.toml` should have:
```toml
[build]
  command = "npm run build"
  publish = "out"

[build.environment]
  NODE_VERSION = "20"
```

### 🎯 Common Build Errors & Solutions:

1. **"Cannot find module"**
   - Solution: Run `npm install` locally first
   - Push `package-lock.json` to repo

2. **"Type error"**
   - Solution: Run `npm run type-check` locally
   - Fix any errors before pushing

3. **"Build script returned non-zero exit code: 2"**
   - Usually means TypeScript or module errors
   - Check build logs for specific error

### 💡 Debug Steps:

1. **Enable Verbose Logging**
   ```bash
   npm run build -- --debug
   ```

2. **Check for Hidden Errors**
   ```bash
   npm ls  # Check for missing dependencies
   ```

3. **Verify File Structure**
   - All route folders must have `page.tsx`
   - All imports must resolve correctly

### ✅ Final Verification:

Before pushing to Netlify:
- [ ] `npm install` completes without errors
- [ ] `npm run type-check` passes
- [ ] `npm run build` creates `out` directory
- [ ] No console errors in build output
- [ ] All pages have proper exports

### 🚀 Push to Netlify:

```bash
git add .
git commit -m "Fix build issues - add next-env.d.ts and update config"
git push
```

## 🆘 If Still Failing:

Share the EXACT error message from Netlify build logs, not just "Build script returned non-zero exit code: 2". The actual error will be a few lines above that message.
