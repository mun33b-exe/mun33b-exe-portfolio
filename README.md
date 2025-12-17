# Muhammad Muneeb Ur Rehman - Portfolio

A modern, futuristic portfolio website built with Astro, Tailwind CSS, and smooth animations.

🌐 **Live Demo**: [https://mun33b-exe.github.io/mun33b-exe-portfolio](https://mun33b-exe.github.io/mun33b-exe-portfolio)

---

## ✨ Features

- **Modern Stack**: Astro + Tailwind CSS + TypeScript
- **Smooth Animations**: GSAP hero animations + Lenis smooth scrolling
- **Responsive Design**: Mobile-first, works on all devices
- **Dark Theme**: Professional dark color scheme
- **SEO Optimized**: Meta tags, semantic HTML, fast loading
- **Static Output**: Pure HTML/CSS/JS, no server required

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📁 Project Structure

```
├── public/
│   └── assets/
│       ├── images/       # Profile & project images
│       └── fonts/        # Outfit font
├── src/
│   ├── components/       # Astro components
│   ├── data/             # TypeScript data files
│   ├── layouts/          # Base layout
│   ├── pages/            # Route pages
│   └── styles/           # Global CSS
└── dist/                 # Build output (generated)
```

---

## 🎨 Color System

| Token | Color | Usage |
|-------|-------|-------|
| `--color-background` | `#18191A` | Page background |
| `--color-surface` | `#232325` | Cards, surfaces |
| `--color-accent` | `#3FA2A9` | Brand color, links |
| `--color-primary` | `#FFFFFF` | Primary text |
| `--color-secondary` | `#B3B3B3` | Secondary text |

---

## 🌐 GitHub Pages Deployment

This project is configured for **automatic deployment** via GitHub Actions.

### Automatic Deployment (Recommended)

1. Push your code to the `main` branch
2. GitHub Actions will automatically build and deploy
3. View your site at: `https://mun33b-exe.github.io/mun33b-exe-portfolio`

### Manual Deployment

```bash
# Build the project
npm run build

# The static files are in ./dist
# Deploy the contents of ./dist to GitHub Pages
```

### GitHub Repository Settings

1. Go to **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. The workflow will deploy automatically on push

---

## 🔧 Configuration

To change the deployment URL, edit `astro.config.mjs`:

```javascript
export default defineConfig({
  site: 'https://your-username.github.io',
  base: '/your-repo-name',
  // ...
});
```

For root domain (`username.github.io`), use:

```javascript
export default defineConfig({
  site: 'https://your-username.github.io',
  base: '/',
  // ...
});
```

---

## 📜 License

MIT License - Feel free to use this template for your own portfolio!

---

## 👤 Author

**Muhammad Muneeb Ur Rehman**

- GitHub: [@mun33b-exe](https://github.com/mun33b-exe)
- LinkedIn: [mun33b-exe](https://www.linkedin.com/in/mun33b-exe/)
- YouTube: [@mun33b-exe](https://www.youtube.com/@mun33b-exe)
