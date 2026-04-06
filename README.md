# 🚀 Professional Portfolio | Udayanga Jayasundara

A modern, high-performance, and visually engaging portfolio website designed for a Backend Engineer. This project focuses on high-quality UX/UI, smooth animations, and a clean, developer-centric aesthetic.

## 🛠️ Project Overview
This is a single-page application (SPA) built to showcase professional experience, technical expertise, and academic background. It prioritizes performance, accessibility, and a modern "glass-morphism" design language.

---

## 🏗️ Technical Stack

### Core Framework & Language
*   **React 19:** Utilizing the latest React features for efficient UI rendering and component-based architecture.
*   **TypeScript:** Ensuring type safety and robust development with a strongly-typed codebase.
*   **Vite 8:** Next-generation frontend tooling providing an extremely fast development environment and optimized production builds.

### UI & Styling
*   **Vanilla CSS (CSS Next):** Custom styling using modern CSS features like CSS Variables (Custom Properties), Nesting, and Media Queries.
*   **Framer Motion:** Powering the "Spring" animations, scroll-triggered reveals, and interactive hover states.
*   **Lucide React:** A clean and consistent icon set for visual cues.
*   **Responsive Design:** Mobile-first approach ensuring a seamless experience across all screen sizes.

### Analytics & Deployment
*   **CounterAPI.dev:** A serverless REST API used for tracking and displaying page visits.
*   **GitHub Pages:** Automated deployment pipeline for high-availability static hosting.
*   **gh-pages (npm):** Utility package for seamless deployment from the command line.

---

## 🚀 Local Development

Follow these steps to get the project up and running on your local machine.

### Prerequisites
*   **Node.js:** v20.0.0 or higher
*   **npm:** v10.0.0 or higher

### 1. Clone the Repository
```bash
git clone https://github.com/ujayasundara/portfolio.git
cd portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
Start the Vite development server with Hot Module Replacement (HMR).
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for Production
Generate a highly optimized static build in the `dist/` folder.
```bash
npm run build
```

### 5. Deployment
Deploy the `dist/` folder to the `gh-pages` branch.
```bash
npm run deploy
```

---

## 📂 Project Structure
*   `src/App.tsx`: The main application logic and component structure.
*   `src/App.css`: Custom styling and animation definitions.
*   `src/index.css`: Global styles, CSS variables, and design tokens.
*   `public/`: Static assets (favicon, etc.).
*   `vite.config.ts`: Configuration for Vite and base paths for deployment.

---

## 📝 Key Features
*   **Dark Mode Support:** Automatically adapts to the user's system preferences.
*   **Interactive Skills Grid:** Hover-sensitive tags for technical expertise.
*   **Animated Timeline:** Experience and Education sections use staggered reveal animations.
*   **Subtle View Counter:** A custom-built hit counter integrated into the footer.

---

Developed by **Udayanga Jayasundara** with the assistance of **Gemini**.
