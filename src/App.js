import "./App.css";
import SignUP from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/sign-in" />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUP />} />
            </Routes>
        </Router>
    );
};

export default App;
