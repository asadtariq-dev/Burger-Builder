import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Burger from "./components/Burger";
import Navbar from "./components/Navbar";
import Order from "./components/Order";
import Auth from "./components/Auth";
import OrderList from "./components/OrderList";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="burger-container">
          <Switch>
            <Route exact path="/">
              <Burger />
            </Route>
            <Route exact path="/auth">
              <Auth />
            </Route>
            <Route exact path="/order">
              <Order />
            </Route>
            <Route exact path="/orders">
              <OrderList />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
export default App;
