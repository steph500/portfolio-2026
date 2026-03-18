# Portfolio 2026 - Stefan O. Juma

An ultra-modern, visually stunning portfolio website showcasing my work as an AI Engineer, ML Engineer, and Full-Stack Developer.

![Portfolio Preview](https://img.shields.io/badge/Next.js-15.0-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Three.js](https://img.shields.io/badge/Three.js-Active-white?style=flat-square&logo=three.js)

## ✨ Features

- **3D Particle Background** - Interactive Three.js particle system
- **Smooth Animations** - Powered by Framer Motion
- **Glassmorphism Design** - Modern glass-effect UI components
- **Dark Mode** - Optimized dark theme with vibrant gradient accents
- **Responsive Design** - Mobile-first approach, works on all devices
- **Smooth Scrolling** - Lenis smooth scroll integration
- **Interactive Components** - Micro-interactions and hover effects

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/steph500/portfolio-2026.git

# Navigate to the project directory
cd portfolio-2026

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build for Production

```bash
# Build the static export
npm run build

# The output will be in the /out directory
```

## 📂 Project Structure

```
portfolio-2026/
├── app/
│   ├── globals.css          # Global styles and custom utilities
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page component
├── components/
│   ├── About.tsx            # About section
│   ├── Contact.tsx          # Contact form and info
│   ├── Experience.tsx       # Work timeline
│   ├── Footer.tsx           # Footer component
│   ├── Hero.tsx             # Hero with 3D particles
│   ├── Navigation.tsx       # Responsive navigation
│   ├── Projects.tsx         # Featured projects grid
│   └── Skills.tsx           # Interactive skills showcase
├── public/                  # Static assets
├── next.config.ts           # Next.js configuration
├── package.json             # Dependencies
└── README.md                # This file
```

## 🎨 Customization

### Personal Information

Update the following files to personalize your portfolio:

- **Contact Info**: Edit `components/Contact.tsx`
- **Projects**: Modify `components/Projects.tsx`
- **Experience**: Update `components/Experience.tsx`
- **Skills**: Adjust `components/Skills.tsx`
- **About**: Edit `components/About.tsx`

### Styling

- **Colors**: Modify CSS variables in `app/globals.css`
- **Gradients**: Update gradient classes throughout components
- **Animations**: Adjust Framer Motion properties in components

### Metadata

Edit `app/layout.tsx` to update:
- Page title
- Description
- Open Graph tags
- Twitter card info

## 🌐 Deployment

### GitHub Pages

This project is configured for GitHub Pages deployment:

1. Push your code to the `main` branch
2. Enable GitHub Pages in repository settings
3. Set source to `gh-pages` branch (created by GitHub Actions)
4. Or deploy `/out` folder manually

```bash
# Build the project
npm run build

# Deploy to GitHub Pages (using gh-pages package)
npm install -g gh-pages
gh-pages -d out
```

### Vercel

Alternatively, deploy to Vercel:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🔧 Dependencies

Key dependencies:

- `next` - React framework
- `react` - UI library
- `typescript` - Type safety
- `tailwindcss` - Styling
- `framer-motion` - Animations
- `three` - 3D graphics
- `lucide-react` - Icons
- `clsx` - Conditional classes
- `tailwind-merge` - Merge utility classes

## 🤝 Contributing

This is a personal portfolio, but feel free to fork and customize it for your own use!

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Stefan O. Juma**

- GitHub: [@steph500](https://github.com/steph500)
- LinkedIn: [stephenjuma](https://linkedin.com/in/stephenjuma)
- Email: stephenjuma500@gmail.com

---

Built with ❤️ and lots of ☕
