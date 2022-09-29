import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Burger from "./components/Burger";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import Order from "./components/Order";

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
            <Route path="/auth/login">
              <Login />
            </Route>
            <Route path="/auth/signup">
              <Register />
            </Route>
            <Route path="/order">
              <Order />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
export default App;
