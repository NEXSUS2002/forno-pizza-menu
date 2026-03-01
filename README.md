# 🍕 Forno Authentic Pizza Menu

A responsive, data-driven restaurant menu application built with React and Vite. This project simulates a real-world restaurant interface by dynamically updating the UI based on inventory status (Available vs. Sold Out) and business hours (Open vs. Closed).

## ✨ Features

- **Time-Based Conditional Rendering**: The application checks the current time against the restaurant's business hours. If visited outside operating hours, the menu is completely replaced by an "Out of Order" screen.
- **Dynamic Inventory Status**: Pizzas marked as "Sold Out" in the data automatically gray out, disable their order buttons, and update their price tags to reflect their unavailability.
- **Fully Responsive Design**: Built entirely with Plain CSS, utilizing CSS Grid, Flexbox, and `clamp()` functions to ensure the menu looks perfect on mobile phones, tablets, and large desktop monitors without relying on external CSS frameworks.
- **Clean UI/UX**: Features a warm, authentic Italian restaurant color palette with custom SVG icons (via `lucide-react`).

## 🛠️ Tech Stack

- **React.js**: Core library for building the user interface.
- **Vite**: Next-generation frontend tooling for a lightning-fast development and build experience.
- **Plain CSS**: Modern, responsive styling utilizing CSS variables (`:root`) and mathematical functions (`clamp()`).
- **Lucide React**: For clean, scalable SVG icons (`CheckCircle2`, `AlertCircle`, `Hourglass`).

## 🧠 Core React Concepts Applied

This project was built to heavily practice and demonstrate fundamental React architecture:

1. **Component Separation**: The UI is broken down into modular, reusable building blocks (`App`, `Header`, `Menu`, `Pizza`, `Footer`).
2. **Props & Destructuring**: Data is passed down strictly from parent to child (One-Way Data Flow), utilizing JavaScript destructuring in the component parameters for cleaner code (e.g., `const Pizza = ({ pizzaObj }) => { ... }`).
3. **Rendering Lists**: Utilizes the `.map()` method to dynamically generate the grid of pizza cards from a raw data array, securely assigning unique `key` props to each child element.
4. **Conditional Rendering**:
   - **Early Returns**: The `Menu` component returns the "Closed" screen early if the store is not open, preventing the rest of the component from rendering.
   - **Ternary Operators (`? :`)**: Used dynamically inside JSX to swap text (Price vs. "Sold Out") and UI badges.
   - **Conditional CSS Classes**: Template literals are used to conditionally append CSS classes (like `.sold-out`) based on the data state.

## 📂 Project Structure

```
src/
├── components/
│   ├── Header.jsx      # Top branding and title
│   ├── Menu.jsx        # Evaluates business hours and renders the grid or closed screen
│   ├── Pizza.jsx       # Reusable template for an individual pizza card
│   └── Footer.jsx      # Bottom business hours and copyright
├── data.js             # Raw pizza data (simulating a database/API response)
├── index.css           # Global plain CSS styles
├── App.jsx             # Main Parent Component (handles time logic & state)
└── main.jsx            # React root mounting

```

## 🚀 Getting Started

To run this project locally on your machine, follow these steps:

Prerequisites

- Node.js and npm installed on your machine.

Installation

**Clone the repository** (if pulling from GitHub) or set up a new Vite project:

```
git clone <https://github.com/NEXSUS2002/forno-pizza-menu.git>
cd forno-pizza-menu
```

**Install Dependencies:**
Install the standard React packages and the Lucide icon library.

```
npm install
npm install lucide-react
```

**Start the Development Server:**

```
npm run dev
```

The app will open in your default browser at http://localhost:5173.

## 🧪 Testing the Conditional Rendering

To test the "Store Closed" screen without waiting for the actual time to pass, a "Dev Toggle" button is included in the bottom right corner of the screen in development mode. Clicking this will force the state to switch between open and closed.
