# Deployment Guide for barryrogergoldberg.com

## Option 1: Deploy to Vercel (Recommended - Easiest)

### Step 1: Push to GitHub
1. Create a new repository on GitHub (e.g., `portfolio-website`)
2. Run these commands:
```bash
git add .
git commit -m "Initial commit - Portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git
git push -u origin main
```

### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com) and sign up/login with GitHub
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Vite settings - just click "Deploy"
5. Your site will be live in ~2 minutes with a URL like `portfolio-website.vercel.app`

### Step 3: Add Custom Domain
1. In your Vercel project dashboard, go to "Settings" → "Domains"
2. Add `barryrogergoldberg.com` and `www.barryrogergoldberg.com`
3. Vercel will show you DNS records to add:
   - Add an A record pointing to Vercel's IP
   - Or add a CNAME record for `www` pointing to `cname.vercel-dns.com`
4. Update your domain's DNS settings (wherever you bought the domain)
5. Wait for DNS propagation (can take a few hours)

---

## Option 2: Deploy to Netlify

### Step 1: Push to GitHub (same as above)

### Step 2: Deploy to Netlify
1. Go to [netlify.com](https://netlify.com) and sign up/login
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub and select your repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy site"

### Step 3: Add Custom Domain
1. Go to "Site settings" → "Domain management"
2. Add custom domain: `barryrogergoldberg.com`
3. Follow Netlify's DNS instructions

---

## Option 3: Deploy to Cloudflare Pages

1. Push to GitHub (same as above)
2. Go to Cloudflare Dashboard → Pages
3. Connect to GitHub and select repository
4. Build settings:
   - Framework preset: Vite
   - Build command: `npm run build`
   - Build output directory: `dist`
5. Add custom domain in Pages settings

---

## Domain Setup

### If you haven't bought the domain yet:
1. Buy `barryrogergoldberg.com` from:
   - Namecheap
   - Google Domains
   - GoDaddy
   - Cloudflare (recommended - includes free SSL)

### DNS Configuration:
- **For Vercel**: Add the DNS records Vercel provides
- **For Netlify**: Add the DNS records Netlify provides
- **For Cloudflare**: Add the domain to Cloudflare and update nameservers

---

## Quick Deploy Commands

After setting up GitHub:

```bash
# Make sure everything is committed
git add .
git commit -m "Ready for deployment"
git push origin main
```

Then follow the platform-specific steps above.


