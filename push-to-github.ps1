# Git Push Script for CookBook Repository
# Make sure Git is installed before running this script

Write-Host "Initializing Git repository..." -ForegroundColor Cyan
git init

Write-Host "Adding all files..." -ForegroundColor Cyan
git add .

Write-Host "Creating initial commit..." -ForegroundColor Cyan
git commit -m "Initial commit: CookBook recipe management app with React, Tailwind CSS, and JSON Server"

Write-Host "Setting main branch..." -ForegroundColor Cyan
git branch -M main

Write-Host "Adding remote repository..." -ForegroundColor Cyan
git remote add origin https://github.com/Rohan-malladi/CookBook.git

Write-Host "Pushing to GitHub..." -ForegroundColor Cyan
git push -u origin main

Write-Host "Done! Your code has been pushed to GitHub." -ForegroundColor Green

