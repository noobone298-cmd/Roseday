@echo off
REM Git Installation Helper for Windows

echo ========================================
echo Git Installation Guide
echo ========================================
echo.
echo Git is required to push your code to GitHub.
echo.
echo Two options:
echo.
echo OPTION 1: Download and Install Manually (Recommended)
echo =========================================
echo 1. Visit: https://git-scm.com/download/win
echo 2. Download the latest version
echo 3. Run the installer
echo 4. Click through with default settings
echo 5. IMPORTANT: Restart PowerShell after installation
echo 6. Then run: git --version (to verify)
echo.
echo OPTION 2: Install with Chocolatey (if installed)
echo =========================================
echo Run: choco install git -y
echo.
echo OPTION 3: Install with Windows Package Manager (if installed)
echo =========================================
echo Run: winget install --id Git.Git -e --source winget
echo.
echo ========================================
echo After Installation, Run These Commands:
echo ========================================
echo.
echo git config --global user.name "Your Name"
echo git config --global user.email "your.email@example.com"
echo.
echo Then navigate to your project folder and run:
echo ========================================
echo cd "C:\Users\ThinkPad\Documents\GitHub\Roseday"
echo git init
echo git add .
echo git commit -m "Initial commit: Valentine's Day Gift Generator"
echo git branch -M main
echo git remote add origin https://github.com/YOUR-USERNAME/Roseday.git
echo git push -u origin main
echo ========================================
echo.
pause
