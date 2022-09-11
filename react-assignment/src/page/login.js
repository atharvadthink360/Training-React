import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { infoContext } from "../infoContext";
import "./login.css";

export default function Login() {
    const [User, setUser] = useContext(infoContext);

    var navigate = useNavigate();

    const navigateToPD = () => {
        navigate("/personalDetails");
    };

    const navigateToGD = () => {
        navigate("/govtDetails");
    };

    const navigateToAD = () => {
        navigate("/addressDetails");
    };

    const navigateToSummary = () => {
        navigate("/summary");
    };

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const UpdateInfo = (inp, key) => {
        useEffect(() => {
            const userObj = {
                ...User,
            };
            userObj[key] = inp;
            setUser(userObj);
        }, [inp]);
    };

    function callPath(path) {
        navigate(path);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("username:", username);
        console.log("password:", password);

        var path = "";

        const userObj = {
            ...User,
        };
        userObj["username"] = username;
        userObj["password"] = password;
        userObj["loggedIn"] = true;

        setUser(userObj);

        if (User.username == null) {
            userObj["step"] = 1;

            setUser(userObj);

            navigate("/personalDetails");
        }

        if (User.username != null) {
            if (User.step === 1) {
                navigateToPD();
            } else if (User.step === 2) {
                navigateToGD();
            } else if (User.step === 3) {
                navigateToAD();
            } else {
                navigateToSummary();
            }
        }

        if (path !== "") {
            callPath(path);
        }
    };

    return (
        <div className="login-page">
            <div className="header">
                <span>Login</span>
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        className="input-label"
                        id="username"
                        type="text"
                        placeholder="Username"
                        value={username}
                        required
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        className="input-label"
                        id="password"
                        type="password"
                        placeholder="Password"
                        value={password}
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <br />
                <button
                    style={{
                        padding: 10,
                        fontSize: 15,
                        border: 0,
                        borderRadius: 15,
                    }}
                    type="submit"
                    id="submitBtn"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
