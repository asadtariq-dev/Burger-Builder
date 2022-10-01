import { Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { createOrder } from "../db";
import "./Burger.css";

function Order() {
  let location = useLocation();
  const burger = location.state.burger;
  const price = location.state.price;

  const displayOrder = () => {
    let burgers = [];

    for (let i = 0; i < burger.lettuce; i++) {
      burgers.push(<div key={burgers.length} className="lettuce"></div>);
    }
    for (let i = 0; i < burger.bacon; i++) {
      burgers.push(<div key={burgers.length} className="bacon"></div>);
    }
    for (let i = 0; i < burger.cheese; i++) {
      burgers.push(<div key={burgers.length} className="cheese"></div>);
    }
    for (let i = 0; i < burger.meat; i++) {
      burgers.push(<div key={burgers.length} className="meat"></div>);
    }
    if (burgers.length === 0) {
      return <h2>It won't taste good</h2>;
    }
    return burgers;
  };
  return (
    <>
      <h2>We hope it tastes well!</h2>
      <div className="burgerIngredients">
        <div className="top"></div>
        {displayOrder()}
        <div className="bottom"></div>
      </div>
      <div className="ingredientBtns">
        <Button
          onClick={() => {
            createOrder(burger, price);
          }}
          className="btn btn-primary"
        >
          Continue
        </Button>
        <Link to={"/"}>
          <Button className="btn-danger">Cancel</Button>
        </Link>
      </div>
    </>
  );
}
export default Order;
