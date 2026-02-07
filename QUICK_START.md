# 📌 **QUICK START: Push to GitHub in 5 Steps**

## ⚠️ Git is Not Installed

Git is required to push your code to GitHub. Follow these simple steps:

---

## **Step 1: Download & Install Git** ⬇️

### Option A: Direct Download (Easiest)
1. Go to: **https://git-scm.com/download/win**
2. Click the download button (Windows 64-bit or 32-bit)
3. Run the installer file
4. Click "Next" repeatedly - accept all defaults
5. **Restart your PowerShell** after installation completes

### Option B: Chocolatey (if installed)
```powershell
choco install git -y
```

### Option C: Windows Package Manager
```powershell
winget install --id Git.Git -e --source winget
```

---

## **Step 2: Verify Git Installation** ✅

Open a **NEW PowerShell window** and run:
```powershell
git --version
```

You should see: `git version X.X.X.windows.X`

---

## **Step 3: Set Git Configuration** ⚙️

Only run these once:
```powershell
git config --global user.name "Your Full Name"
git config --global user.email "your.email@gmail.com"
```

---

## **Step 4: Create GitHub Repository** 🔧

1. Go to: **https://github.com/new**
2. Repository name: `Roseday`
3. Make it **Public** (for free GitHub Pages)
4. Click "Create Repository"
5. **Copy the HTTPS URL** from the page (looks like: `https://github.com/YOUR-USERNAME/Roseday.git`)

---

## **Step 5: Push Your Code** 🚀

Copy and paste these commands in PowerShell (**one at a time**):

```powershell
# Navigate to your project
cd "C:\Users\ThinkPad\Documents\GitHub\Roseday"

# Initialize git
git init

# Add all files
git add .

# Create commit
git commit -m "Initial commit: Valentine's Day Gift Generator with games"

# Rename branch to main
git branch -M main

# Add remote (Replace YOUR-USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/Roseday.git

# Push to GitHub
git push -u origin main
```

When prompted for password, paste your **Personal Access Token** (not your password):
- Go to: GitHub → Settings → Developer Settings → Personal Access Tokens
- Create token with 'repo' scope
- Copy and paste when prompted

---

## **Step 6: Enable GitHub Pages (Optional - for free hosting)** 🌐

1. Go to your repository on GitHub
2. Click "Settings"
3. Go to "Pages"
4. Select "Deploy from a branch"
5. Choose "main" branch and "/ (root)"
6. Save
7. Your site will be live at: `https://YOUR-USERNAME.github.io/Roseday`

---

## ✅ **You're Done!**

Your code is now on GitHub! You can:
- Share the repository link
- Share the GitHub Pages link for the live site
- Invite collaborators
- Make updates anytime

---

## 🔄 **For Future Updates**

```powershell
cd "C:\Users\ThinkPad\Documents\GitHub\Roseday"
git add .
git commit -m "Your message here"
git push
```

---

## ❓ **Troubleshooting**

**Q: "git is not recognized" after restart**
- A: Restart PowerShell or restart your computer

**Q: "fatal: could not read Username"**
- A: Use Personal Access Token instead of password

**Q: "Permission denied"**
- A: Check your git credentials or token permissions

**Q: "fatal: remote origin already exists"**
- A: Run: `git remote remove origin` then add it again

---

## 📞 **Need Help?**

- Git Help: https://git-scm.com/doc
- GitHub Help: https://docs.github.com
- GitHub Issues: Create an issue in your repo

---

**That's it! Your Valentine's Day Gift Generator is now on GitHub! 💝**
