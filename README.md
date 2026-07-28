# Maksym Kudyk — Personal Portfolio

> Production-ready, framework-free personal portfolio and interactive CV built with modern web technologies.

[![Portfolio Live](https://img.shields.io/badge/status-live-success?style=flat-square&color=8BAA6B)](https://neplyx.github.io)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![JavaScript](https://img.shields.io/badge/Vanilla_JS-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## ⚡ Overview

A high-performance, responsive portfolio website designed in a sleek Vercel/Linear dark mode aesthetic with Matcha Green (`#8BAA6B`) accents. Built entirely without heavy frontend frameworks or build tools to ensure lightning-fast load times and clean DOM manipulation.

## 🚀 Key Features

* **Bilingual Support (EN / UA):** Custom state-managed localization dictionary stored in `localStorage` with instant UI updates.
* **Canvas 3D Perspective Grid:** Interactive, animated background grid with responsive resize handling and `prefers-reduced-motion` accessibility support.
* **Mock API Endpoint Playground:** An interactive developer console allowing visitors to "query" portfolio data directly via a simulated REST endpoint.
* **Code Showcase & System Architecture:** Clean syntax-highlighted code block and visual data-flow diagram for backend projects.
* **Interactive Terminal & Easter Eggs:** Animated boot sequence terminal in the footer and keyboard-triggered backdoor easter egg.
* **Responsive & Accessible:** Fully adaptive layout from mobile screens to ultrawide displays with keyboard navigation support.

## 🛠️ Tech Stack

* **Markup:** HTML5 (Semantic elements, ARIA attributes)
* **Styling:** Tailwind CSS (via CDN) + Custom CSS variables and glassmorphism effects
* **Scripting:** Vanilla JavaScript (ES6+, Intersection Observer, Clipboard API, Canvas API)

## 📁 Project Structure

```text
├── index.html          # Main markup structure
├── css/
│   └── style.css       # Custom design tokens, animations, and dark theme styles
├── js/
│   ├── main.js         # Core logic, i18n dictionary, API mock, and event handlers
│   ├── animations.js   # Intersection Observer scroll reveals and cursor glow effects
│   └── 3d-grid.js      # Canvas perspective grid animation loop
└── assets/
    ├── profile.jpg     # Developer portrait (grayscale to color hover effect)
    └── cv.pdf          # Downloadable curriculum vitae