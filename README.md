# ZH Creative LLC

A static React site deployed to GitHub Pages.

## Prerequisites (MacOS)

### Xcode Command Line Tools

```bash
xcode-select --install
```

### Node.js

Download the installer from [nodejs.org](https://nodejs.org) (LTS version).

Run the `.pkg` file and follow the prompts.

Verify installation:

```bash
node -v
npm -v
```

### Git

Download the installer from [git-scm.com](https://git-scm.com/download/mac).

Run the `.pkg` file and follow the prompts.

Verify installation:

```bash
git --version
```

## Initial Setup

### Create the GitHub repository

1. Go to [github.com](https://github.com) and create a new repository
2. Name it `ZachSite` (or any name you prefer)
3. Leave it **public** or **private** — either works
4. Do **not** initialize with README, `.gitignore`, or license
5. Click **Create repository**

### Clone and set up locally

```bash
git clone https://github.com/<your-username>/ZachSite.git
cd ZachSite
```

Copy all project files into this folder, then run:

```bash
npm install
```

### Connect to the remote

```bash
git remote add origin https://github.com/<your-username>/ZachSite.git
git branch -M main
git push -u origin main
```

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

The site will be available at `http://localhost:5173`.

## File Structure

| File | Purpose |
|------|---------|
| `src/App.jsx` | Main component — edit this to change content |
| `src/index.css` | Tailwind CSS directives |
| `src/App.css` | Global CSS styles |
| `src/main.jsx` | React entry point |
| `index.html` | HTML entry point |
| `vite.config.js` | Vite config — base path |
| `tailwind.config.js` | Tailwind CSS config |
| `postcss.config.js` | PostCSS config |
| `package.json` | Dependencies and scripts |

## Images

| Directory | Usage |
|-----------|-------|
| `public/images/` | Static images — reference at `/images/photo.jpg` |
| `src/assets/` | Imported images — `import img from '../assets/photo.jpg'` |

## Making Changes

1. Edit `src/App.jsx` to update content
2. Preview locally with `npm run dev`
3. Build to verify: `npm run build`

## Pushing Changes

```bash
git add .
git commit -m "description of changes"
git push
```

## Deploying

```bash
npm run deploy
```

This builds the site and pushes the `dist/` folder to the `gh-pages` branch. GitHub serves the site from that branch.

## Custom Domain

### Add a CNAME record in your DNS provider

1. Log in to your DNS provider (e.g. GoDaddy, Cloudflare)
2. Find the DNS management page for your domain
3. Add a CNAME record:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| CNAME | `www` (or your subdomain) | `<your-username>.github.io` | Default |

4. Save

### Configure GitHub Pages

1. Go to your repo → **Settings > Pages**
2. **Source**: Deploy from a branch
3. **Branch**: `gh-pages`
4. **Folder**: `/ (root)`
5. **Custom domain**: enter your domain (e.g. `www.example.com`)
6. Click **Save**
7. Check **Enforce HTTPS**

DNS propagation can take up to 48 hours.

## Troubleshooting

- **Blank page**: Check browser console for 404 errors on assets
- **MIME type error**: Verify GitHub Pages is serving from `gh-pages` branch
- **CNAME not working**: Wait for DNS propagation, verify record type is CNAME
