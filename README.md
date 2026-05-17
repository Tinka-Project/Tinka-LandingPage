# Tinka Landing Page

This is the codebase for the Tinka landing page, originally based on a Figma design. It is built as a modern, responsive, and performant web application.

## 🏗️ Architecture

This project follows a component-based architecture using React, focusing on modularity, reusability, and clean code principles. 

- **UI Components:** We use a mix of generic UI components (button, card, dialog, etc.) and page-specific semantic sections (hero, features, integrations, footer). The generic components are located in `src/app/components/ui`, providing a cohesive design system using Radix UI primitives and Tailwind CSS.
- **Section Components:** The main application leverages domain-specific sections (`HeroSection`, `FeaturesSection`, `UseCasesSection`, etc.) composed together in `src/app/App.tsx`.
- **Styling System:** We use a utility-first approach with Tailwind CSS. Theme tokens (colors, radii) are defined using CSS variables, making it extremely easy to switch and manage themes without touching the component classes directly.
- **Vite Setup:** The application is bundled and served using Vite, offering an extremely fast development server and optimized build process.

## 💻 Technologies Used

The project is built with a modern frontend tech stack:

- **[React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/):** Core library and language setup.
- **[Vite](https://vitejs.dev/):** Next Generation Frontend Tooling for the build system and dev server.
- **[Tailwind CSS](https://tailwindcss.com/):** Utility-first CSS framework for rapid UI development.
- **[shadcn/ui](https://ui.shadcn.com/) / [Radix UI](https://www.radix-ui.com/):** For accessible, unstyled UI primitives.
- **[Framer Motion](https://motion.dev/):** Used for smooth, declarative animations.
- **[Lucide React](https://lucide.dev/):** Beautiful and consistent iconography.
- **[Embla Carousel](https://www.embla-carousel.com/):** Used for fluid carousels and sliders.

## 🚀 Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

Ensure you have Node.js and a package manager installed. This project is configured to use `pnpm` workspace setup.
- Node.js (v18 or higher recommended)
- [pnpm](https://pnpm.io/) (v8+)

### Installation

1. Clone the repository to your local machine.
2. Install the project dependencies by running:

```bash
pnpm install
# Alternatively, if you use npm:
# npm install
```

### Running the Application

To start the local development server:

```bash
pnpm run dev
# Or npm run dev
```

The application will be running at [http://localhost:5173/](http://localhost:5173/) (or another port if 5173 is occupied).

### Building for Production

To create a production-ready build:

```bash
pnpm run build
```

This will generate an optimized build inside the `dist` directory that you can deploy to any static hosting provider.

  