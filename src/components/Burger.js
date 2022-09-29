import { onAuthStateChanged } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { auth } from "../firebase-config";
import "./Burger.css";

function Burger() {
  const [lettuce, setLettuce] = useState(0);
  const [bacon, setBacon] = useState(0);
  const [cheese, setCheese] = useState(0);
  const [meat, setMeat] = useState(0);
  const [price, setPrice] = useState(0);

  const [user, setUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const addRemoveIngredient = (action, ingredient) => {
    switch (ingredient) {
      case "lettuce": {
        if (action === "add") {
          setLettuce(lettuce + 1);
          setPrice(price + 200);
        } else {
          if (lettuce > 0) {
            setLettuce(lettuce - 1);
            setPrice(price - 200);
          }
        }
        break;
      }
      case "bacon": {
        if (action === "add") {
          setBacon(bacon + 1);
          setPrice(price + 250);
        } else {
          if (bacon > 0) {
            setBacon(bacon - 1);
            setPrice(price - 250);
          }
        }
        break;
      }
      case "cheese": {
        if (action === "add") {
          setCheese(cheese + 1);
          setPrice(price + 320);
        } else {
          if (cheese > 0) {
            setCheese(cheese - 1);
            setPrice(price - 320);
          }
        }
        break;
      }
      case "meat": {
        if (action === "add") {
          setMeat(meat + 1);
          setPrice(price + 400);
        } else {
          if (meat > 0) {
            setMeat(meat - 1);
            setPrice(price - 400);
          }
        }
        break;
      }
      default:
        break;
    }
  };

  const burgerContent = () => {
    let burger = [];

    for (let i = 0; i < lettuce; i++) {
      burger.push(<div key={burger.length} className="lettuce"></div>);
    }
    for (let i = 0; i < bacon; i++) {
      burger.push(<div key={burger.length} className="bacon"></div>);
    }
    for (let i = 0; i < cheese; i++) {
      burger.push(<div key={burger.length} className="cheese"></div>);
    }
    for (let i = 0; i < meat; i++) {
      burger.push(<div key={burger.length} className="meat"></div>);
    }
    if (burger.length === 0) {
      return <h2>Add ingredients here</h2>;
    }
    return burger;
  };
  return (
    <>
      <div className="burgerIngredients">
        <div className="top"></div>
        {burgerContent()}
        <div className="bottom"></div>
      </div>
      <div className="ingredientsBlock">
        <h4>
          Current Price: <strong>Rs. {price}</strong>
        </h4>
        <p>Lettuce</p>
        <div className="ingredientBtns">
          <button
            onClick={() => addRemoveIngredient("remove", "lettuce")}
            className="ingredientBtn"
          >
            Less
          </button>
          <button
            onClick={() => addRemoveIngredient("add", "lettuce")}
            className="ingredientBtn"
          >
            More
          </button>
        </div>
        <p>Bacon</p>
        <div className="ingredientBtns">
          <button
            onClick={() => addRemoveIngredient("remove", "bacon")}
            className="ingredientBtn"
          >
            Less
          </button>
          <button
            onClick={() => addRemoveIngredient("add", "bacon")}
            className="ingredientBtn"
          >
            More
          </button>
        </div>
        <p>Cheese</p>
        <div className="ingredientBtns">
          <button
            onClick={() => addRemoveIngredient("remove", "cheese")}
            className="ingredientBtn"
          >
            Less
          </button>
          <button
            onClick={() => addRemoveIngredient("add", "cheese")}
            className="ingredientBtn"
          >
            More
          </button>
        </div>
        <p>Meat</p>
        <div className="ingredientBtns">
          <button
            onClick={() => addRemoveIngredient("remove", "meat")}
            className="ingredientBtn"
          >
            Less
          </button>
          <button
            onClick={() => addRemoveIngredient("add", "meat")}
            className="ingredientBtn"
          >
            More
          </button>
        </div>
        {user ? (
          <button className="orderBtn">Order Now</button>
        ) : (
          <button className="orderBtn">Sigin to order</button>
        )}
      </div>
    </>
  );
}
export default Burger;
