# 🚀 GitHub Setup Guide for Valentine's Day Gift Generator

Since Git is not currently installed on your system, here are the steps to set up your project on GitHub:

## Step 1: Install Git

### For Windows:
1. Download from: https://git-scm.com/download/win
2. Run the installer and follow the prompts
3. Accept default settings (important for PATH)
4. Restart your terminal/PowerShell after installation

### Verify Installation:
```powershell
git --version
```

## Step 2: Configure Git (First Time Only)

```powershell
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## Step 3: Create Repository on GitHub

1. Go to https://github.com/new
2. Create a new repository named "Roseday"
3. Choose Public (for free hosting with GitHub Pages)
4. Do NOT initialize with README (we already have one)
5. Click "Create repository"

## Step 4: Initialize Local Repository

Navigate to your project folder and run:

```powershell
cd "C:\Users\ThinkPad\Documents\GitHub\Roseday"

# Initialize git
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Valentine's Day Gift Generator with games, messages, and QR codes"

# Add remote repository (replace USERNAME with your GitHub username)
git remote add origin https://github.com/USERNAME/Roseday.git

# Set main branch
git branch -M main

# Push to GitHub
git push -u origin main
```

## Step 5: Enable GitHub Pages (For Free Hosting)

1. Go to your repository on GitHub
2. Navigate to Settings → Pages
3. Select "Deploy from a branch"
4. Choose "main" branch and "/ (root)" folder
5. Save
6. Your site will be available at: `https://USERNAME.github.io/Roseday`

## Step 6: Future Updates

After making changes to your files:

```powershell
# Check what changed
git status

# Add changes
git add .

# Commit with a message
git commit -m "Your commit message here"

# Push to GitHub
git push
```

## Common Git Commands

```powershell
# View commit history
git log

# Check status
git status

# View changes
git diff

# Undo changes to a file
git checkout -- filename

# View remote URL
git remote -v
```

## Troubleshooting

### Git command not found after installation
- Restart your terminal/PowerShell
- Ensure Git was added to PATH during installation

### Authentication issues
- Use Personal Access Token instead of password
- Go to GitHub Settings → Developer Settings → Personal Access Tokens
- Create a token with 'repo' scope
- Use the token as password when prompted

### Push rejected
- Ensure your local commits are ahead of remote
- Run: `git pull origin main` first
- Then: `git push origin main`

## GitHub Pages Features

Once enabled, every push to main will automatically update your live site at:
```
https://USERNAME.github.io/Roseday
```

## Project Structure for GitHub

```
Roseday/
├── index.html          # Main website
├── script.js           # Game logic & functionality
├── style.css           # Responsive styling
├── README.md           # Documentation
├── .gitignore          # Files to ignore in git
└── .github/            # (Optional) GitHub Actions, workflows
```

## Tips

✅ Push frequently
✅ Write clear commit messages
✅ Keep sensitive data out of repository
✅ Use .gitignore for local files
✅ Test locally before pushing

## Resources

- Git Documentation: https://git-scm.com/doc
- GitHub Help: https://docs.github.com
- GitHub Pages: https://pages.github.com/
- Markdown Guide: https://www.markdownguide.org/

---

Questions? Check the main README.md for project details!
