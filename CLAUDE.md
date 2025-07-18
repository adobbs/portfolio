# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static personal portfolio website for Andy Dobbs, a Design Engineer. The site features a sci-fi space aesthetic with dark theme, starfield background, animated spacejelly creatures, and Battlestar Galactica-inspired corner cuts. It's a single-page HTML file with embedded CSS and JavaScript.

## Architecture

- **Single HTML file**: `index.html` contains the entire site with embedded CSS and JavaScript
- **Static assets**: Favicon files for different sizes and devices
- **Responsive design**: Uses CSS media queries for mobile/desktop layouts with breakpoint at 768px
- **Dark theme only**: Fixed dark color scheme with sci-fi aesthetic
- **Deployment**: Configured for Vercel with analytics integration

## Development

This is a static site with no build process or dependencies. Changes can be made directly to `index.html`.

To preview changes locally:
```bash
python -m http.server 8000
# or
npx serve .
```

## Design System

### Color Palette
- **Primary accent**: `#0d7a5f` (green-shifted teal) used for buttons and highlights
- **Background**: Subtle gradient from `#0a0a0a` to `#080b09` (black to very dark green)
- **Cards/Links**: `rgba(26, 26, 26, 0.85)` semi-transparent backgrounds
- **Text hierarchy**: `#e8e8e8` (primary), `#b0b0b0` (secondary), `#b8b8b8` (descriptions)

### Typography
- **Headers**: Audiowide (Google Font) - futuristic, retro sci-fi aesthetic
- **Body text**: Poppins (Google Font) - clean, readable sans-serif
- **Hierarchy**: Main heading (2.5rem), role title (1.5rem), project headers (1.25rem)

### Visual Elements
- **Corner cuts**: CSS `clip-path` creates BSG-style diagonal corners on all interactive elements
  - Project cards: 20px cuts (top-left, bottom-right)
  - Social links: 16px cuts (top-left, bottom-right)  
  - Project buttons: 12px cuts (top-left, bottom-right)
- **Starfield**: 200 static stars scattered across upper 2/3 of viewport for space atmosphere
- **Animated spacejelly**: Jellyfish-like creatures with wider, rounded dome shape and brand green gradient coloring launching from planetary surface
- **Gradient overlay**: Semi-transparent teal gradient from bottom simulating planetary atmosphere
- **No borders**: Clean, borderless design relies on backgrounds and corner cuts

### Layout Structure
- **Z-index layers**: Spacejelly animation (1), starfield (2), gradient (8), main content (10)
- **Grid system**: 3-column project grid on desktop, single column on mobile
- **Responsive behavior**: Starfield and spacejelly animations hidden on mobile for performance

### Interactive Elements
- **Hover effects**: Subtle transforms, color shifts, and box shadows
- **Mobile optimization**: Hover effects disabled on touch devices
- **Accessibility**: Maintains color contrast and keyboard navigation

## Key Components

- **Background Animation**: JavaScript-driven spacejelly system with object pooling and performance optimization
- **Static Starfield**: 200 strategically placed stars for space atmosphere
- **Project Cards**: Semi-transparent cards with corner cuts showcasing work
- **Social Links**: GitHub and LinkedIn with matching aesthetic
- **Responsive Images**: Favicon set for various devices and sizes