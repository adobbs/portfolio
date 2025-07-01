# Andy Dobbs - Portfolio

A futuristic personal portfolio website featuring a sci-fi aesthetic with animated background elements and Battlestar Galactica-inspired design.

## ✨ Features

- **Sci-Fi Design**: Dark theme with retro-futuristic Audiowide typography
- **Animated Background**: Floating particles with subtle green tint
- **Corner Cuts**: BSG-style diagonal cuts on all interactive elements
- **Responsive**: Mobile-optimized with performance considerations
- **Zero Dependencies**: Pure HTML, CSS, and JavaScript

## 🎨 Design System

### Visual Elements
- **Corner cuts** using CSS `clip-path` on cards, links, and buttons
- **Gradient background** transitioning from black to dark green
- **Floating dots animation** with performance optimization
- **Semi-transparent backgrounds** for depth and layering

### Typography
- **Headers**: Audiowide (Google Font) - futuristic aesthetic
- **Body**: Poppins (Google Font) - clean readability

### Color Palette
- Primary: `#0d7a5f` (green-shifted teal)
- Background: `#0a0a0a` to `#080b09` gradient
- Text: `#e8e8e8`, `#b0b0b0`, `#b8b8b8`

## 🚀 Development

### Local Development
```bash
# Serve locally
python -m http.server 8000
# or
npx serve .
```

### Project Structure
```
├── index.html          # Complete single-page application
├── favicon.ico         # Favicon
├── favicon-16x16.png   # 16x16 favicon
├── favicon-32x32.png   # 32x32 favicon
├── apple-touch-icon.png # Apple touch icon
└── README.md           # This file
```

### Architecture
- **Single HTML file** with embedded CSS and JavaScript
- **Static deployment** ready for Vercel, Netlify, or any static host
- **No build process** required - direct file editing
- **Mobile-first responsive** design with 768px breakpoint

## 🛠 Customization

### Updating Content
Edit the content directly in `index.html`:
- Personal information in the header section
- Project cards in the `.projects` grid
- Social links in the `.links` section

### Design Modifications
Key CSS variables and values:
- Corner cut sizes: `20px` (cards), `16px` (links), `12px` (buttons)
- Primary color: `#0d7a5f`
- Animation density: Controlled in JavaScript `ThinkingAnimation` class

### Animation Controls
The floating dots animation can be customized via the JavaScript class:
- `density`: Number of particles
- `speed`: Animation speed multiplier
- `intensity`: Particle frequency

## 📱 Mobile Experience

- Hover effects disabled on touch devices
- Background animations hidden for performance
- Single-column layout with optimized spacing
- Maintains visual hierarchy and accessibility

## 🎯 Performance

- Lightweight: No external frameworks or libraries
- Optimized animations with `requestAnimationFrame`
- Efficient particle cleanup and memory management
- Mobile-optimized with reduced visual effects

---

Built with modern CSS features including `clip-path`, CSS Grid, and Flexbox for a cutting-edge sci-fi aesthetic.