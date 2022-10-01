import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase-config";
import "./Auth.css";
import { Link } from "react-router-dom";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [flag, setFlag] = useState("register");
  const [error, setError] = useState("");

  const onSubmit = async () => {
    try {
      if (flag === "login") {
        console.log(email);
        console.log(password);
        const user = await signInWithEmailAndPassword(auth, email, password);
        console.log(user);
      } else if (flag === "register") {
        const user = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log(user);
        setError("");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="Auth-form-container">
      <div className="Auth-form">
        {flag === "login" ? (
          <h2>Login here</h2>
        ) : (
          <h2>Register your account</h2>
        )}
        <div className="Auth-form-content">
          <div className="form-group mt-3">
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>
          <div className="form-group mt-3">
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </div>
          {error ? (
            <p className="text-center text-danger mt-2">{error}</p>
          ) : null}
          <div className="d-grid gap-2 mt-3">
            <button onClick={onSubmit} className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="d-grid gap-2 mt-3">
            {flag === "login" ? (
              <Link
                className="btn btn-secondary"
                onClick={(event) => {
                  setFlag("register");
                }}
                to={"/auth"}
              >
                Register
              </Link>
            ) : (
              <Link
                className="btn btn-secondary"
                onClick={(event) => {
                  setFlag("login");
                }}
                to={"/auth"}
              >
                Login
              </Link>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
export default Auth;
