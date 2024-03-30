import { useState } from "react";
// import { Link } from "react-dom";
import { Link } from "react-router-dom";
import "./index.css";

const SignUp = () => {
    const [msg, setMsg] = useState("");

    const onLogin = (e) => {
        e.preventDefault();
        setMsg("You logged in successfully");
    };

    return (
        <div className="signup-page">
            <h1>Sign Up</h1>
            <form>
                <h3>Create your Account!</h3>
                <input type="text" placeholder="Username*" required />
                <input type="email" placeholder="email*" />
                <input type="phone" placeholder="Number*" />
                <input type="phone" placeholder="alternat number" />
                <input type="password" placeholder="Password*" />
                <input type="password" placeholder="confirm password*" />
                <button onClick={(e) => onLogin(e)}>Sign Up</button>
                {/* terinary logic rendering */}
                {/* {msg !== "" ? <p>{msg}</p> : null} */}
                {msg !== "" && <p>{msg}</p>}
                {/* <p>{msg}</p> */}
                <p>
                    Already have an account? <Link to="/sign-in">Sign In</Link>
                </p>
            </form>
        </div>
    );
};

export default SignUp;
