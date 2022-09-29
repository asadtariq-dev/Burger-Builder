import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

function Checkout(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Order</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Your Order Details</h4>
        <ul>
          <li>Lettuce: {props.burger.ingredients.lettuce}</li>
          <li>Bacon: {props.burger.ingredients.bacon}</li>
          <li>Cheese: {props.burger.ingredients.cheese}</li>
          <li>Meat: {props.burger.ingredients.meat}</li>
        </ul>
        <h5>Total Price: RS. {props.burger.price}</h5>
      </Modal.Body>
      <Modal.Footer>
        <h6>Continue to checkout?</h6>
        <Link
          className="btn btn-primary"
          to={{
            pathname: "/order",
            state: { burger: props.burger.ingredients },
          }}
        >
          Continue
        </Link>
        <Button className="btn-danger" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default Checkout;
