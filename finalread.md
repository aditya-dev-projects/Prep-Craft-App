Root Directory (D:\deal\Dsa-Prep)
This is the project's foundation, containing all the core configuration and management files.

⚙️ Configuration:

components.json: Configuration for shadcn/ui, defining component styles and paths.

tailwind.config.ts, postcss.config.js: Tailwind CSS setup for utility-first styling.

vite.config.ts: Vite's main configuration for development and building.

tsconfig.*.json: TypeScript configurations for the project, application, and Node environment.

.env.example, .gitignore: Environment variable template and Git ignore rules.

📦 Package Management:

package.json, package-lock.json, bun.lockb: Define project dependencies and manage package versions.

🚀 Entry Point & Documentation:

index.html: The main entry file that serves the React application.

README.md: Provides an overview of the project.

📂 public Directory
This folder holds static assets that are directly accessible by the browser.

🖼️ Static Assets:

favicon.ico, favicon.svg: Website icons.

placeholder.svg: A generic image placeholder. This could be considered a "garbage file" if not in use.

🤖 Web Crawlers:

robots.txt: Directives for search engine web crawlers.

📂 scripts Directory
This directory contains utility scripts that are not part of the main application's build but are used for development or maintenance.

makeAdmin.js: A utility script likely used to elevate a user's role to an administrator in the Firebase database.

📂 src Directory
This is the heart of your application, containing all the source code.

⚛️ Main App Files:

main.tsx: The primary entry point for the React application, rendering App.tsx into the DOM.

App.tsx: The root component that sets up global providers (Theme, QueryClient, etc.) and defines the application's routing using react-router-dom.

💅 Styling:

index.css: Global CSS styles, likely including Tailwind's base, components, and utilities. App.css might be vestigial and can be removed if empty.

vite-env.d.ts: Vite-specific type definitions for TypeScript.

📂 src/components
This directory is for reusable UI components that are shared across different pages.

🎨 UI Library Components:

ui/: The location for all components imported from shadcn/ui, such as button.tsx, card.tsx, etc.

🛠️ Custom Components:

CodeEditor.tsx: A custom component for a code editing interface.

Header.tsx, Navbar.tsx: Components for application-wide navigation and layout.

ProblemDescription.tsx: A component to display the details of a problem.

📂 src/data
This directory stores structured data used to populate content within the application.

aptitudeCourse.ts: Defines the chapters, topics, and structure for the Aptitude course.

dsaCourse.ts: Defines the chapters, topics, and structure for the Data Structures & Algorithms course.

📂 src/hooks
This folder contains custom React hooks to encapsulate and reuse stateful logic.

useAuth.ts: Manages user authentication state and provides functions for login, logout, etc.

useDSAProgress.ts, useAptitudeProgress.ts: Hooks for tracking and managing user progress in the respective courses.

use-mobile.tsx, use-toast.ts: Utility hooks for responsive design and displaying notifications.

📂 src/integrations/firebase
This directory contains all the logic for interacting with Firebase services.

config.ts: Holds the Firebase configuration settings.

services.ts: Contains service functions to interact with Firebase services like Authentication, Firestore, or Realtime Database.

codeServices.ts: Likely a specific service for handling code-related operations, like saving or running user code.

types.ts: TypeScript type definitions for Firebase data.

📂 src/lib
This directory is for utility functions and libraries that don't fit into other categories.

utils.ts: A collection of miscellaneous helper functions used throughout the application.

📂 src/pages
This directory contains the main views or pages of the application, corresponding to different routes.

🏠 Main Pages:

LandingPage.tsx: The public home page (/).

Auth.tsx: The login/signup page (/auth).

NotFound.tsx: The 404 error page (*).

💡 Aptitude Course Pages:

AptitudePage.tsx: The main index page for the aptitude course (/aptitude).

AptitudeChapterDetail.tsx: Displays details for a specific aptitude chapter (/aptitude/:chapterId).

💻 DSA Course Pages:

ChapterIndex.tsx: A list of all DSA chapters (/chapters).

ChapterDetail.tsx: Details for a specific DSA chapter (/chapter/:chapterId).

PracticePage.tsx: The page where users can practice a specific problem (/practice/:problemId).

🗺️ Page Connections and Routing
Routing is handled by react-router-dom within App.tsx. The application has a clear separation between public and protected routes.

Public Routes: Accessible to all users.

/ (Landing Page)

/auth (Authentication)

Protected Routes: Require user authentication, enforced by a ProtectedRoute component.

/dsa, /chapters, /chapter/:chapterId, /practice/:problemId

/aptitude, /aptitude/:chapterId