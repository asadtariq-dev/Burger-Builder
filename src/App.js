import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Burger from "./components/Burger";
import Navbar from "./components/Navbar";
import Order from "./components/Order";
import Auth from "./components/Auth";
import OrderList from "./components/OrderList";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <div className="burger-container">
          <Routes>
            <Route exact path="/" element={<Burger />} />
            <Route exact path="/auth" element={<Auth />} />
            <Route exact path="/order" element={<Order />} />
            <Route exact path="/orders" element={<OrderList />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}
export default App;
