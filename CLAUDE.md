# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a simple, static personal portfolio website for Andy Dobbs, a software engineer. The site is a single-page HTML file with embedded CSS and SVG icons.

## Architecture

- **Single HTML file**: `index.html` contains the entire site with embedded CSS
- **Static assets**: Favicon files for different sizes and devices
- **Responsive design**: Uses CSS media queries for mobile/desktop layouts
- **Dark mode**: Automatically adapts to user's system preference via `prefers-color-scheme`
- **Deployment**: Configured for Vercel (`.vercel` in .gitignore)

## Development

This is a static site with no build process or dependencies. Changes can be made directly to `index.html`.

To preview changes locally, simply open `index.html` in a web browser or use a local server:
```bash
python -m http.server 8000
# or
npx serve .
```

## Key Components

- **Styling**: All CSS is embedded in the `<style>` tag within the HTML head
- **Icons**: SVG icons are embedded directly in the HTML for GitHub and LinkedIn links
- **Typography**: Uses Google Fonts (Poppins) loaded from CDN
- **Layout**: Flexbox-based centered layout with responsive breakpoints at 768px