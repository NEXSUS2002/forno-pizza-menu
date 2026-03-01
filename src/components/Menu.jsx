import React from "react";
import { Hourglass } from "lucide-react";
import Pizza from "./Pizza";

const Menu = ({ isOpen, pizzas }) => {
  // CONDITIONAL RENDERING: Multiple Returns (Early Return)
  // If the store is NOT open, we return the entire Closed Component early.

  if (!isOpen) {
    return (
      <div className="out-of-order">
        <div className="icon-circle">
          <Hourglass size={32} color="#c0392b" />
        </div>
        <div className="closed-text">
          Sorry, We are Currently Closed! Come back in Our opening period.
        </div>
      </div>
    );
  }

  // If the store IS open, we render the list of pizzas
  return (
    <ul className="menu-grid">
      {/* RENDERING LISTS: Using .map() to loop over the array */}
      {pizzas.map((pizza) => (
        // Passing the whole object as a prop and assinging a unique key
        <Pizza pizzaObj={pizza} key={pizza.name} />
      ))}
    </ul>
  );
};

export default Menu;
