# 🚀 Next.js Advanced Portfolio SPA

A high-performance, interactive Single Page Application (SPA) portfolio built with Next.js, TypeScript, and WebGL. Designed with a premium "Terminal/Cyberpunk" aesthetic, focusing on smooth animations and immersive user experience.

![Portfolio Screenshot](public/screenshot.png) *<!-- Add a screenshot here later -->*

## ✨ Key Features

### 1. 🏗️ SPA Architecture
- **Seamless Navigation**: Custom state-based routing (`intro` -> `about` -> `projects` -> `contact`) ensures the 3D background remains persistent while content transitions smoothly.
- **Fluid Transitions**: Powered by `framer-motion` for slide, fade, and zoom effects.

### 2. 🎨 Immersive Design
- **Persistent WebGL Background**: A custom Three.js shader providing a dynamic, flowing backdrop.
- **Cyberpunk / Terminal Aesthetics**:
  - **Bio**: "Command Prompt" style typewriter effect (`C:\Users\Daksh>`).
  - **Contact**: "Secure Uplink" glassmorphism form with terminal status popups.
- **Glassmorphism**: Extensive use of simple, blurred transparencies for a modern look.

### 3. 💼 Interactive Sections
- **About**: 
  - **Infinite Tech Stack**: Auto-scrolling marquee of skills.
  - **Experience Timeline**: Animated vertical timeline with glowing nodes.
- **Projects**: 
  - **Drag Carousel**: Smooth horizontal gesture-based navigation.
  - **Video Cards**: Autoplaying video previews for *Hypermind*, *Blood Bridge*, and *TimeWise*.
  - **Terminal Modals**: Clicking a project opens a unique `exe` window typing out detailed descriptions.
  - **Deep Links**: Direct GitHub repo access via card actions.
- **Contact**: 
  - **Simulation**: "Transmit Data" button triggers a cinematic status popup (e.g., "ENCRYPTING PACKET...", "TRANSMISSION SUCCESSFUL").

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Directory)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **3D Graphics**: [Three.js](https://threejs.org/) / [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- **Icons**: [Lucide React](https://lucide.dev/)
- **UI Components**: Custom components + `shadcn/ui` primitives.

## 🚀 Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Daksh-create349/Portfolio.git
    cd Portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

```
├── app/                   # Next.js App Router
│   ├── layout.tsx         # Root layout with WebGL background
│   └── page.tsx           # Main SPA logic & section orchestration
├── components/
│   ├── sections/          # Main view components
│   │   ├── Intro.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx   # Contains Modal & Video logic
│   │   └── Contact.tsx    # Contains Form & Popup logic
│   └── ui/                # Reusable UI elements
│       ├── typewriter.tsx # Shared animation component
│       ├── web-gl-shader.tsx
│       └── ...
└── public/                # Static assets
```

## 🤝 Contact

**Daksh Srivastava**  
- **LinkedIn**: [Daksh Srivastava](https://www.linkedin.com/in/daksh-srivastava-2ba851344/)
- **GitHub**: [Daksh-create349](https://github.com/Daksh-create349)

---
*Built with ❤️ and ☕ by Daksh.*
