import React from "react";
import { CheckCircle2, AlertCircle } from "lucide-react";

// DESTRUCTURING PROPS: Extracting pizzaObj directly from parameters
const Pizza = ({ pizzaObj }) => {
  return (
    // CONDITIONAL CSS CLASSES: Using template literals to add a class if sold out
    <li className={`pizza-card ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} className="pizza-img" />

      <div className="pizza-info">
        <div className="pizza-header">
          <h3 className="pizza-name">{pizzaObj.name}</h3>

          {/* CONDITIONAL RENDERING: Ternary operator for the badges */}
          {pizzaObj.soldOut ? (
            <span className="badge sold-out">
              <AlertCircle size={10} /> Sold Out
            </span>
          ) : (
            <span className="badge available">
              <CheckCircle2 size={10} /> Available
            </span>
          )}
        </div>

        <p className="ingredients">{pizzaObj.ingredients}</p>

        <div className="pizza-footer">
          {/* CONDITIONAL TEXT & STYLING */}
          <span className={`price ${pizzaObj.soldOut ? "sold-out-text" : ""}`}>
            {pizzaObj.soldOut ? "$--" : `$${pizzaObj.price}`}
          </span>

          <button
            className={`btn ${pizzaObj.soldOut ? "btn-disabled" : "btn-primary"}`}
            disabled={pizzaObj.soldOut}
          >
            {" "}
            Order Now!!
          </button>
        </div>
      </div>
    </li>
  );
};

export default Pizza;
