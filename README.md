# FadSec Lab Discord Invite Site

A modern, minimalist Discord invite page with animated backgrounds and automatic cache busting for assets.

## Features

- 🎨 Modern glassy design with animated backgrounds
- 🚀 Built with Vite for optimal performance
- 🔄 Automatic cache busting for all assets
- 📱 Fully responsive design
- 🖼️ Open Graph meta tags for social sharing
- ⚡ Fast development server with hot reloading
- 🚀 Automated deployment with GitHub Actions

## Development

### Prerequisites

- Node.js 18+ and npm

### Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open http://localhost:3000 in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Build & Deployment

### Local Build

```bash
npm run build
```

The built files will be in the `dist/` directory with automatically hashed filenames for cache busting.

### GitHub Actions Deployment

The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically:

1. Builds the site when you push to the main branch
2. Deploys to GitHub Pages
3. Uses cache-busted asset URLs for optimal performance

To enable GitHub Pages deployment:

1. Go to your repository Settings → Pages
2. Set Source to "GitHub Actions"
3. Push to the main branch to trigger deployment

## Cache Busting

All assets (images, JavaScript) are automatically hashed during build:

- `fadseclab.png` → `fadseclab-Be_ZkOXo.png`
- `banner.png` → `banner-B5ucS9v3.png`
- `favicon.png` → `favicon-BpucxgyC.png`

This ensures browsers always load the latest version of your assets when you update them.

## Project Structure

```
├── index.html          # Main landing page
├── banner.html         # OG image template for social sharing
├── main.js            # Asset imports and dynamic updates for index.html
├── banner.js          # Asset imports for banner.html
├── assets/img/        # Source images
├── vite.config.js     # Vite configuration
├── package.json       # Dependencies and scripts
└── .github/workflows/ # GitHub Actions deployment
```

## Assets

- `assets/img/fadseclab.png` - Main logo
- `assets/img/banner.png` - OG image for social sharing
- `assets/img/favicon.png` - Site favicon

## Customization

To update the design or content:

1. Edit HTML files for structure and content
2. Modify CSS within the `<style>` tags for styling
3. Update assets in `assets/img/` directory
4. Run `npm run build` to generate new cache-busted versions

## License

© 2024 - 2025 FadSec Lab