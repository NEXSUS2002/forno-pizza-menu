import { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import { pizzaData } from "./data";

function App() {
  // Time logic
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;
  const currentlyOpen = hour >= openHour && hour <= closeHour; // true or false

  // Adding state JUST to toggle the view to test both screen without waiting for 10 PM!
  const [isForcedClosed, setIsForcedClosed] = useState(!currentlyOpen);

  return (
    <div className="app-container">
      <div className="main-content">
        <Header />
        {/* A Conditional rendering will be placed here later */}
        <Menu isOpen={!isForcedClosed} pizzas={pizzaData} />
      </div>
      <Footer openHour={openHour} closeHour={closeHour} />

      {/* Dev toggle to preview both screens */}
      <button
        className="dev-toggle"
        onClick={() => setIsForcedClosed(!isForcedClosed)}
      >
        Test View: {isForcedClosed ? "Open Store" : "Close Store"}
      </button>
    </div>
  );
}

export default App;
