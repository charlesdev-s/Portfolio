---
description: How to deploy the portfolio to Vercel with auto-sync from GitHub
---

# Deploy Portfolio to Vercel (Auto-Sync)

This workflow deploys your portfolio with automatic updates — every `git push` triggers a new deployment.

## Prerequisites
- GitHub account (create at https://github.com if needed)
- Vercel account (create at https://vercel.com — sign up with GitHub)

## Step 1: Create a GitHub Repository

1. Go to https://github.com/new
2. Name it `portfolio` (or any name you like)
3. Set it to **Public** (required for free Vercel hosting)
4. Do NOT initialize with README (we already have one)
5. Click **Create repository**

## Step 2: Push Your Code to GitHub

// turbo
Run the following command, replacing `YOUR_GITHUB_USERNAME` with your actual GitHub username:

```bash
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/portfolio.git
git push -u origin main
```

> If prompted, log in with your GitHub credentials or personal access token.

## Step 3: Deploy on Vercel

1. Go to https://vercel.com and sign in with GitHub
2. Click **"Add New Project"**
3. Find and select your `portfolio` repository
4. Vercel auto-detects Vite — just click **"Deploy"**
5. Wait ~30 seconds for the build to complete
6. You'll get a live URL like: `https://portfolio-xxxxx.vercel.app`

## Step 4: Set a Custom Domain Name (Optional)

1. In Vercel dashboard, go to your project → **Settings → Domains**
2. You can set a custom subdomain like `charlesrichard.vercel.app` for free

## How Auto-Sync Works

After initial setup, the workflow to update your portfolio is:

```bash
# 1. Make your changes (edit projects, update skills, etc.)
# 2. Stage and commit
git add -A
git commit -m "Updated projects section"

# 3. Push to GitHub — Vercel auto-deploys!
git push
```

That's it! Every `git push` automatically rebuilds and deploys your site within ~30 seconds.
