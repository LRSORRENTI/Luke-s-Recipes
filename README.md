# Luke's Recipes

## Overview

This is a web application designed for food enthusiasts who love to explore new recipes and dishes. Leveraging the [Edamam Recipe API][https://developer.edamam.com/edamam-recipe-api], the app allows users to browse a wide variety of foods, recipes, and culinary ideas, making it easier to discover and prepare new dishes at home.

## Features

- **Explore Recipes**: Search and discover recipes from a wide range of cuisines.
- **Detailed Recipe Views**: Get detailed information about each recipe, including ingredients, cooking instructions, and nutritional facts.
- **Favorite Recipes**: Save your favorite recipes for easy access later.
- **Responsive Design**: Enjoy a great user experience on both desktop and mobile devices.

## Technologies Used

- React.js: A JavaScript library for building user interfaces.
- Redux Toolkit: State management toolkit for efficient Redux development.
- React Router: Declarative routing for React applications.
- Axios: Promise-based HTTP client for making API requests.
- Vite: Modern frontend build tool.
- Tailwind CSS: A utility-first CSS framework for rapidly building custom designs.
- ESLint: Linting utility for JavaScript and JSX, with plugins for React-specific linting.
- Lightbox2, React Slick: For creating responsive carousels and image galleries.

## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository
2. Install depedencies

```
npm install
```

3. Create a .env file at the root of the project and use Edamam credentials

```
VITE_APP_ID=your_app_id
VITE_APP_KEY=your_app_key
```

4. Start the development server

```
npm run dev
```
