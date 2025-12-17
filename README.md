# Muhammad Muneeb Ur Rehman - Portfolio

A modern, futuristic portfolio website built with **Astro**, **Tailwind CSS**, and **TypeScript**. Features smooth animations with GSAP and Framer Motion.

![Portfolio Preview](https://via.placeholder.com/800x400/18191A/3FA2A9?text=Portfolio+Preview)

## ✨ Features

- 🚀 **Built with Astro** - Static site generation for blazing fast performance
- 🎨 **Tailwind CSS** - Utility-first styling with custom color tokens
- 📱 **Fully Responsive** - Mobile-first design that looks great on all devices
- ✨ **Smooth Animations** - GSAP for hero animations, Framer Motion for components
- 🌊 **Smooth Scrolling** - Lenis for butter-smooth scroll experience
- 🌙 **Dark Theme** - Premium dark design inspired by Linear/Vercel
- ♿ **Accessible** - Semantic HTML and ARIA labels
- 🔍 **SEO Optimized** - Meta tags, Open Graph, and semantic markup

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| [Astro](https://astro.build) | Static site generator |
| [Tailwind CSS](https://tailwindcss.com) | Styling |
| [TypeScript](https://typescriptlang.org) | Type safety |
| [GSAP](https://gsap.com) | Hero animations |
| [Framer Motion](https://framer.com/motion) | Component animations |
| [Lenis](https://lenis.studiofreight.com) | Smooth scrolling |

## 📁 Project Structure

```
/
├── public/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── projects/    # Project screenshots
│   │   │   └── profile/     # Profile image
│   │   └── icons/           # SVG icons
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── ProjectCard.astro
│   │   ├── SkillCard.astro
│   │   ├── SocialLinks.astro
│   │   ├── SectionHeader.astro
│   │   ├── AnimatedText.tsx    # React island
│   │   └── HeroAnimation.js    # GSAP
│   ├── data/
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   ├── experience.ts
│   │   └── education.ts
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── experience.astro
│   │   ├── education.astro
│   │   ├── projects.astro
│   │   └── contact.astro
│   └── styles/
│       └── global.css
└── package.json
```

## 🎨 Color System

The portfolio uses a carefully crafted color palette:

| Color | Hex | Usage |
|-------|-----|-------|
| Background | `#18191A` | Main background |
| Surface | `#232325` | Cards, navbar |
| Primary | `#FFFFFF` | Primary text |
| Secondary | `#B3B3B3` | Secondary text |
| Accent | `#3FA2A9` | Brand color, CTAs |
| Button | `#303136` | Button surfaces |
| Online | `#00FF44` | Status indicator |

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/muneeb-exe/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:4321
   ```

### Customization

1. **Update personal info** - Edit data files in `src/data/`
2. **Replace images** - Add your images to `public/assets/images/`
3. **Add your CV** - Place `cv.pdf` in `public/assets/`
4. **Update social links** - Edit `src/components/SocialLinks.astro`

## 📦 Building for Production

```bash
npm run build
```

The output will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 🌐 Deployment

### GitHub Pages

1. **Install the GitHub adapter**
   ```bash
   npm install @astrojs/github-pages
   ```

2. **Update `astro.config.mjs`**
   ```javascript
   import { defineConfig } from 'astro/config';

   export default defineConfig({
     site: 'https://muneeb-exe.github.io',
     base: '/portfolio',
   });
   ```

3. **Create GitHub Actions workflow**
   
   Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [main]
     workflow_dispatch:

   permissions:
     contents: read
     pages: write
     id-token: write

   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout
           uses: actions/checkout@v4
         - name: Setup Node.js
           uses: actions/setup-node@v4
           with:
             node-version: 20
             cache: npm
         - name: Install dependencies
           run: npm ci
         - name: Build
           run: npm run build
         - name: Upload artifact
           uses: actions/upload-pages-artifact@v3
           with:
             path: ./dist

     deploy:
       needs: build
       runs-on: ubuntu-latest
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       steps:
         - name: Deploy to GitHub Pages
           id: deployment
           uses: actions/deploy-pages@v4
   ```

4. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Under "Build and deployment", select "GitHub Actions"

5. **Push to main branch** - The site will automatically deploy!

### Vercel

1. Connect your GitHub repository to Vercel
2. Deploy with zero configuration - Vercel auto-detects Astro

### Netlify

1. Connect your GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run astro` | Run Astro CLI commands |

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🙏 Acknowledgments

- Design inspiration from [Linear](https://linear.app), [Vercel](https://vercel.com), [Stripe](https://stripe.com)
- Icons from [Heroicons](https://heroicons.com)
- Fonts from [Google Fonts](https://fonts.google.com)

---

Made with ♥ by [Muhammad Muneeb Ur Rehman](https://github.com/muneeb-exe)
