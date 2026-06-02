# Next.js Advanced Portfolio Single Page Application

An interactive, high-performance Single Page Application portfolio built using Next.js, TypeScript, and Three.js WebGL graphics. The application features a terminal-inspired, cyberpunk aesthetic, prioritizing immersive state-based routing, fluid motion design, and secure cloud integrations.

---

## Architecture and Design System

The application is structured to deliver a premium user experience through consistent aesthetics and performance-oriented frontend engineering:

### State-Based Single Page Application Routing
Traditional multi-page navigation causes WebGL contexts to reinitialize, leading to performance drops and visual blinking. This portfolio implements a custom React state machine to drive view transitions:
* State boundaries: `intro` | `about` | `projects` | `certificates` | `contact`
* Persistent WebGL canvas: The Three.js canvas remains mounted at the root layout level, ensuring uninterrupted shader animations during page changes.
* Animation orchestration: Powered by Framer Motion using custom direction-aware slide variants. Transitions feature synchronized coordinate offsets, opacity shifts, and gaussian blur filters.

### Visual Aesthetic and Styling
* Glassmorphism layout: Built on a base of dark backgrounds with low-opacity borders and backdrop filters, giving the content containers a floating glass appearance.
* Persistent WebGL backdrop: A custom Three.js shader component renders a dynamic particle field that responds to runtime environment properties.
* Typewriter animation: Shared components emulate command-line interfaces by typing text segments sequentially at customizable typing speeds.

---

## Core Features

### Interactive Terminal Modals
When exploring projects, the interface acts as a simulated terminal console. Clicking on a project launches a modal resembling an executable process window:
* Execution sequence: Opens with a command prompt execution line (`./describe_project.sh`).
* Interactive queries: Integrated form fields allow users to submit questions about specific projects directly from the terminal console.

### Authentication and Security Layer
* User sessions: Integrated with Clerk authentication.
* Protected endpoints: Project query submissions and contact transmissions require an active Clerk session, preventing automated spam.

### Database Logging and Notification Dispatcher
* Database storage: MongoDB Atlas integration stores incoming messages and project queries. Connective states are cached to optimize serverless API route performance.
* Email dispatch: Nodemailer delivers real-time notifications to the developer containing the sender name, authenticated email address, target project, and decrypted message payload.

### GitHub Integration and Achievements
* Activity calendar: Integrated React GitHub Calendar fetching live contribution metrics.
* Gamified badges: Rendered cards for achievements (e.g., Pull Shark, Pair Extraordinaire, Galaxy Brain, Quickdraw, YOLO) complete with custom detail tooltips.

---

## Selected Works

### Hypermind (AI Education Platform)
An educational system combining real-time intelligence, voice interactions, and generative components:
* Core features: PDF document parsing and summarization, Text-to-Speech audio rendering, and generative UI charts.
* Live voice integration: Utilizes Gemini Live to enable low-latency real-time voice and video communication, including camera streams and audio visualizations.
* Visual logic: Embeds interactive 3D structures using Spline and handles relational trees using ReactFlow.
* Repository: [Hypermind GitHub](https://github.com/Daksh-create349/Hypermind-main)

### Blood Bridge (Healthcare and Social Good)
An automated logistics platform connecting healthcare providers, blood banks, and donors:
* Core features: Real-time inventory dashboards, radius-based broadcast alerts for emergency scenarios, and Google Gemini AI insights for supply-demand forecasting.
* Logistics tracking: Incorporates routing systems for emergency vehicle and drone transport, backed by autonomous matching agents.
* Discoverability: Maps indicating active donation camps alongside a gamified donor engagement engine.
* Repository: [Blood Bridge GitHub](https://github.com/Daksh-create349/Blood-Bridge-3.0)

### Timewise (Productivity and Schedule Management)
A constraint-satisfaction scheduling system designed to optimize institutional layouts:
* Core features: Automated scheduling algorithms, classroom capacity optimization, conflict detection, and role-based timetable visibility.
* Target problems: Eliminates human error in scheduling and minimizes resource idle time.
* Repository: [TimeWise GitHub](https://github.com/Daksh-create349/TimeWise)

### AQUILA (Disaster Management and Geospatial Analytics)
A production-grade geospatial intelligence platform that identifies flood extents:
* Architecture: Decoupled design containing a React/Three.js frontend and a FastAPI/Google Earth Engine backend.
* Data pipelines: Ingests Sentinel-1 and Sentinel-2 satellite imagery. Uses JRC Global Surface Water baselines and adaptive Otsu thresholding to remove permanent water and correct urban false positives.
* UI and analytics: Renders an interactive 3D globe transitioning into a Leaflet mapping engine. Displays real-time calculations for population exposure, flooded area, and confidence metrics.
* Repository: [AQUILA GitHub](https://github.com/Daksh-create349/SelfNprove-PS6)

### GitHub Guardian (Security and DevSecOps)
A forensic security auditing scanner for development workflows:
* Secret hunting: Scans full Git repository histories to uncover exposed credentials in old commits.
* Setup wizard: A browser-based initialization flow providing repository security settings, automated gitignore creation, and direct remote pushes.
* Semantic analysis: Uses language model APIs to review critical code blocks for logical flaws (e.g., SQL injection, insecure command evaluations, cross-site scripting).
* Repository: [GitHub Guardian GitHub](https://github.com/Daksh-create349/Github-Guardian)

---

## Technical Specifications

### Tech Stack
* Core framework: Next.js (App Router, Server Actions)
* Development environment: TypeScript, React 19, Node.js
* Styles: Tailwind CSS
* Animation libraries: Framer Motion
* 3D rendering: Three.js
* Database: MongoDB, Mongoose ODM
* Authentication: Clerk (Next.js SDK)
* Communication utilities: Nodemailer

### Database Schemas

#### Message Model
```typescript
interface IMessage extends Document {
    clerkUserId: string;
    name: string;
    email: string;
    message: string;
    createdAt: Date;
}
```

#### Query Model
```typescript
interface IQuery extends Document {
    clerkUserId: string;
    name: string;
    email: string;
    projectName: string;
    query: string;
    createdAt: Date;
}
```

---

## Directory Structure

```
├── app/                      # Next.js App Router root layout and routing
│   ├── api/                  # Serverless endpoint configurations
│   │   ├── contact/          # Contact submissions route
│   │   └── query/            # Project questions route
│   ├── globals.css           # Tailwind custom utilities and global styles
│   └── page.tsx              # Root SPA state controller and section layout
├── components/
│   ├── sections/             # State-triggered display interfaces
│   │   ├── About.tsx         # User biography and achievements
│   │   ├── Certificates.tsx  # Certification grids and lightbox visualizers
│   │   ├── Contact.tsx       # Transmission forms and logging screens
│   │   ├── Experience.tsx    # Chronological history nodes
│   │   ├── Projects.tsx      # Carousel views and terminal modal details
│   │   └── TechStack.tsx     # Infinite loop marquee of technical skills
│   └── ui/                   # Reusable visual components
│       ├── 3d-paper-plane.tsx
│       ├── classic-resume.tsx
│       ├── hologramatic-text.tsx
│       ├── holographic-card.tsx
│       ├── liquid-glass-button.tsx
│       ├── typewriter.tsx
│       └── web-gl-shader.tsx # Three.js canvas setup
├── lib/
│   ├── models/               # Mongoose schema definitions
│   ├── mongodb.ts            # Connection cache handling
│   └── utils.ts              # Global styling assistants
└── public/                   # Media files and design assets
```

---

## Getting Started

### Prerequisites
* Node.js version 18.x or higher
* A MongoDB database instance
* A Clerk accounts instance
* A Gmail account for Nodemailer SMTP configuration

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Daksh-create349/Portfolio.git
   cd Portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Setup environment variables by creating a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   GMAIL_USER=your_smtp_gmail_username
   GMAIL_APP_PASSWORD=your_smtp_app_password
   MONGODB_URI=your_mongodb_connection_string
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Access the application locally at `http://localhost:3000`.

---

## Contact and Links

* Name: Daksh Srivastava
* LinkedIn: [Daksh Srivastava Profile](https://www.linkedin.com/in/daksh-srivastava)
* GitHub: [Daksh-create349 Portfolio](https://github.com/Daksh-create349)
