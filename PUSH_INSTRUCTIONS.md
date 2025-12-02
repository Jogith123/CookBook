# How to Push Code to GitHub

## Step 1: Install Git (if not already installed)

1. Download Git from: https://git-scm.com/downloads
2. Run the installer and follow the setup wizard
3. Restart your terminal/PowerShell after installation

## Step 2: Run the Push Script

After Git is installed, open PowerShell in the `cook` folder and run:

```powershell
.\push-to-github.ps1
```

## Alternative: Manual Commands

If the script doesn't work, run these commands one by one:

```bash
git init
git add .
git commit -m "Initial commit: CookBook recipe management app"
git branch -M main
git remote add origin https://github.com/Rohan-malladi/CookBook.git
git push -u origin main
```

## Authentication

If GitHub asks for credentials:
- **Username**: Your GitHub username
- **Password**: Use a Personal Access Token (not your GitHub password)
  - Create one at: https://github.com/settings/tokens
  - Select scopes: `repo` (full control of private repositories)

## Troubleshooting

- If you get "remote origin already exists": Run `git remote remove origin` first
- If you get authentication errors: Make sure you're using a Personal Access Token
- If Git is still not found: Restart your terminal after installing Git

