@echo off
echo Checking TypeScript compilation...
echo ================================

cd /d N:\appalachian-connect-farm-template

echo.
echo Running TypeScript check...
call npx tsc --noEmit

if %ERRORLEVEL% EQU 0 (
    echo.
    echo SUCCESS: All TypeScript checks passed!
    echo.
    echo You can now:
    echo 1. git add -A
    echo 2. git commit -m "Fix build: add AnimatePresence import"
    echo 3. git push
    echo 4. Remove @netlify/plugin-nextjs from Netlify UI
    echo 5. Clear cache and deploy
) else (
    echo.
    echo ERROR: TypeScript errors found!
    echo Please fix the errors above before deploying.
)

pause