# Replit.md

## Overview

This is a full-stack web application built with React (frontend) and Express.js (backend) that appears to be a dental practice website focused on the "SEPB-Digital Protocol" by Dr. Guilherme Santos. The application features a modern, responsive design with multiple sections including hero, quiz, protocol information, testimonials, and more.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom dental practice theme colors
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Routing**: Wouter for client-side routing
- **State Management**: React Query (@tanstack/react-query) for server state
- **Build Tool**: Vite for development and bundling

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ESM modules
- **Development**: tsx for TypeScript execution
- **API Structure**: RESTful API with `/api` prefix
- **Error Handling**: Centralized error middleware

### Database & Data Layer
- **ORM**: Drizzle ORM
- **Database**: PostgreSQL (configured for Neon Database)
- **Schema**: Defined in shared directory for type safety
- **Storage Interface**: Abstract storage interface with memory implementation for development

## Key Components

### Frontend Components
1. **Layout Components**
   - Navigation with smooth scrolling
   - Hero section with call-to-action buttons
   - Multiple content sections (Quiz, Protocol, Timeline, Video, Results, Testimonials, etc.)
   - Footer with contact information

2. **Interactive Elements**
   - Quiz component with multi-step form
   - FAQ accordion
   - Mobile-responsive navigation
   - Toast notifications

3. **UI System**
   - Comprehensive design system with custom colors
   - Responsive breakpoints
   - Accessibility features through Radix UI
   - Custom fonts (Poppins and Roboto)

### Backend Components
1. **Server Setup**
   - Express application with middleware
   - Request logging and performance monitoring
   - Static file serving in production
   - Vite integration for development

2. **Data Layer**
   - User schema with username/password
   - Memory storage implementation
   - Database migration support with Drizzle Kit

3. **API Structure**
   - Route registration system
   - Type-safe request/response handling
   - Error handling middleware

## Data Flow

1. **Client-Server Communication**
   - React Query manages server state and caching
   - RESTful API endpoints with `/api` prefix
   - Automatic error handling and toast notifications

2. **Database Operations**
   - Drizzle ORM provides type-safe database operations
   - Abstract storage interface allows for easy testing and development
   - Memory storage for development, PostgreSQL for production

3. **Build Process**
   - Vite builds the frontend to `dist/public`
   - esbuild bundles the backend to `dist/index.js`
   - Shared types between frontend and backend

## External Dependencies

### Frontend Dependencies
- React ecosystem (React, React DOM, React Query)
- Radix UI primitives for accessible components
- Tailwind CSS for styling
- Wouter for routing
- React Hook Form for form management
- Various utility libraries (clsx, date-fns, etc.)

### Backend Dependencies
- Express.js for server
- Drizzle ORM for database operations
- Neon Database serverless driver
- TypeScript and build tools

### Development Dependencies
- Vite with React plugin
- TypeScript compiler
- ESLint and Prettier (implied by project structure)
- Replit-specific development tools

## Deployment Strategy

### Development
- Vite development server with HMR
- Express server with auto-reload via tsx
- In-memory storage for rapid development
- Replit-specific development banner and error overlay

### Production
- Frontend built to static files served by Express
- Backend bundled as single executable
- PostgreSQL database connection
- Environment variables for configuration

### Build Process
1. `npm run build` - Builds both frontend and backend
2. `npm run start` - Runs production server
3. `npm run dev` - Starts development environment
4. `npm run db:push` - Pushes database schema changes

The application is designed to be deployed on Replit with automatic environment detection and development/production mode switching.