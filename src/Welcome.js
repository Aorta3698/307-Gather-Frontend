import { Link, Navigate } from "react-router-dom";

export default function Welcome() {
  return (
    <div className="container">
      <h1>Choose your path!</h1>
      <nav>
        <ul>
          <li>
            <Link to="/users/login">Login</Link>
          </li>
          <li>
            <Link to="/users/signup">Create Account</Link>
          </li>
          <li>
            <Link to="/users/forgot">Forgot Password</Link>
          </li>
          <li>
            <Link to="/home">Home Page</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
