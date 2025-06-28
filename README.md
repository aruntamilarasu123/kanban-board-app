# Kanban Board App

A React-based Kanban board application featuring authentication-protected routes, smooth animations, and responsive UI design. Built with React Router, Tailwind CSS, and custom styling.

---

## Features

- **Authentication Context**: Provides user authentication state across the app.
- **Protected Routes**: Routes like `/projects` and `/project/:slug` require authentication.
- **Responsive Layout**: Uses CSS Grid and Flexbox for adaptable layouts.
- **Animations**: Smooth fade-in and wave animations powered by Tailwind CSS and custom CSS keyframes.
- **Custom Dropdown**: Styled dropdown menus with modern scrollbars.
- **Modern Styling**: Tailwind CSS with custom overrides and base styles for fonts and colors.
- **Autofill Fix**: Input autofill styled to maintain color consistency.

---

## Tech Stack

- React 18+
- React Router v6
- Tailwind CSS
- CSS Modules / Custom CSS
- Context API for state management

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/aruntamilarasu123/kanban-board-app.git
   cd kanban-board-app
    ````

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the app locally:

   ```bash
   npm start
   # or
   yarn start
   ```
---

## Folder Structure

```
src/
├── components/        # Reusable UI components (e.g., PrivateRoute)
├── context/           # Context providers (e.g., AuthContext)
├── pages/             # Page components (Home, Projects, Project, NotFound)
├── App.jsx            # Main App component with routing
├── index.jsx          # ReactDOM entry point
└── styles/            # CSS / Tailwind styles
```

---

## Routing

* `/` — Public Home page
* `/projects` — Protected route listing projects
* `/project/:slug` — Protected route for individual project details
* `*` — 404 NotFound page for unmatched routes

---

## Styling Details

* Uses **Tailwind CSS** for utility-first styling.
* Custom scrollbars for modern browsers.
* Animations implemented using CSS keyframes and Tailwind's `@layer utilities`.
* Fonts: `Poppins` and fallback system fonts.
* Custom dropdown menus positioned with absolute coordinates.

---

## Authentication

* Implemented via `AuthContext` using React Context API.
* `PrivateRoute` component wraps protected pages to ensure only authenticated users can access them.

---

## Notes

* The app uses `HashRouter` from `react-router-dom` for routing.
* Autofill styling fixes applied to inputs to maintain consistent appearance.
* The logo includes a smooth spin animation respecting user motion preferences.

```