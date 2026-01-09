# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static personal portfolio website featuring a Formula 1-inspired design aesthetic with high-performance animations and scroll effects. Built with vanilla JavaScript (no build tools or frameworks) for maximum simplicity and fast loading.

## Architecture

### Core Design Philosophy
- **No build tools**: Pure HTML, CSS, and vanilla JavaScript
- **No dependencies**: Zero npm packages or external libraries
- **Browser-native features**: IntersectionObserver, requestAnimationFrame, native smooth scroll
- **Performance-first**: Optimized animations with `will-change` and transform-based effects

### File Structure
```
/
├── index.html           # Single-page application entry point
├── css/
│   ├── reset.css       # CSS normalization
│   ├── variables.css   # Design tokens (colors, fonts, spacing)
│   ├── layout.css      # Grid systems and container utilities
│   └── style.css       # Component styles and animations
├── js/
│   ├── animations.js   # ScrollManager class (core animation engine)
│   └── main.js         # Application initialization
└── assets/             # Images and media files
```

### Key Architecture Patterns

**ScrollManager Class** (js/animations.js)
- Singleton pattern instantiated on DOMContentLoaded
- Manages three core systems:
  1. IntersectionObserver for scroll-triggered animations (`[data-animate]` elements)
  2. Parallax effects via scroll event listeners (`[data-speed]` elements)
  3. Smooth anchor scrolling for navigation links

**Data Attributes API**
- `[data-animate]`: Elements that fade/slide in when scrolled into view
- `[data-speed]`: Parallax elements with configurable speed (lower = slower movement)
- `[data-limit]`: Max scroll distance for parallax effect

**CSS Architecture**
- CSS Custom Properties (variables.css) for all design tokens
- BEM-inspired naming without strict BEM syntax
- Utility classes in layout.css (`.flex-center`, `.container`, etc.)
- Component-specific styles in style.css

## Design System

### Typography Hierarchy
- `--font-impact` (Oswald): Headers, high-impact text, "racing" aesthetic
- `--font-editorial` (Bodoni Moda): Narrative/human touch, pull quotes
- `--font-tech` (Inter): UI elements, technical data, body text

### Color Palette
- `--color-bg-dark` (#121212): Primary background
- `--color-neon` (#CFFF00): F1-inspired accent (neon green/yellow)
- `--color-text-muted` (#888888): Secondary text
- Dark-on-dark aesthetic with strategic neon accents

### Grid Systems
- **Asymmetric Grid**: 12-column grid for editorial layouts (`.grid-asymmetric`)
- **Standard Grid**: Auto-fit responsive grid for uniform cards (`.grid-standard`)
- Container max-width: 1400px with 90vw width for breathing room

## Development Workflow

### Local Development
```bash
# No build step required - just open in browser
open index.html

# Or use any local server (optional)
python3 -m http.server 8000
# or
npx serve .
```

### Making Changes

**Adding New Sections**
1. Add section markup to index.html following existing patterns
2. Use `data-animate` attributes for scroll animations
3. Style in css/style.css maintaining design system consistency
4. Increment section numbering in `.section-label` (e.g., "05 /// NEW SECTION")

**Animation Modifications**
- Edit `ScrollManager` class in js/animations.js
- Adjust `observerOptions` for animation trigger timing
- Modify parallax calculations in `setupParallax()` method
- CSS transitions controlled via `[data-animate]` classes in style.css

**Design Token Updates**
- All changes to colors, spacing, fonts go in css/variables.css
- Propagates automatically throughout the site
- Use CSS custom properties for all new styles

### Testing
```bash
# No automated tests
# Manual testing checklist:
# - Test in Chrome, Firefox, Safari
# - Check mobile responsiveness (breakpoint at 768px)
# - Verify smooth scroll performance (60fps target)
# - Test all navigation links and anchors
# - Validate IntersectionObserver animations trigger correctly
```

## Performance Considerations

- **Animation Performance**: All animations use `transform` and `opacity` (GPU-accelerated)
- **Will-change**: Applied to `[data-animate]` elements to optimize repaints
- **Observer Pattern**: IntersectionObserver unobserves elements after animation to reduce overhead
- **Event Throttling**: Parallax uses direct scroll listeners (consider throttling for more elements)

## Browser Support

- Modern browsers only (ES6+)
- IntersectionObserver API required (no polyfills)
- CSS Custom Properties required
- Smooth scroll behavior: `window.scrollTo({ behavior: 'smooth' })`

## Content Sections

1. **Hero** - Full-viewport intro with parallax background text
2. **The Narrative** (01) - About section with asymmetric layout
3. **On The Grid** (02) - Tech stack grid cards
4. **Track Record** (03) - Timeline-style experience section
5. **Builds** (04) - Project showcase with large/small card variants
6. **Contact Footer** - CTA and social links

## Important Notes

- **No Framework Dependencies**: Resist adding React, Vue, or build tools. Keep it vanilla.
- **Class-based JS**: ScrollManager uses ES6 classes. Maintain this pattern for consistency.
- **CSS Organization**: Keep separation between variables, layout utilities, and component styles.
- **Mobile-first Animations**: Stagger delays on `.tech-card` children for polished reveals.
- **Accessibility**: Currently minimal - consider adding ARIA labels and keyboard navigation for production.
