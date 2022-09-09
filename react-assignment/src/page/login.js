import { useState, useContext, useEffect } from "react";
// import { UserContext } from "../App";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { infoContext } from "../infoContext";

export default function Login() {
    const [User, setUser] = useContext(infoContext);

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

    var navigate = useNavigate();

    function callPath(path) {
        console.log("Navigating");
        navigate(path);
    }

    // const navigateToPD = () => {
    //     // 👇️ navigate to /contacts
    //     navigate('/personalDetails');
    // };

    // <Route path="/personalDetails" exact element={<PersonalDetails/>}/>

    const handleSubmit = () => {
        // event.preventDefault();
        console.log("username:", username);
        console.log("password:", password);

        var path = "";

        if (User.username != null) {
            // let path = "";
            console.log("Step number", typeof 1);
            if (User.step === 1) {
                console.log("INNNNNN");
                // window.location.href = "/personalDetails";
                path = "/personalDetails";
                // navigate("/personalDetails");
            } else if (User.step === 2) {
                console.log("IOPPPPOPPPOPO");
                path = "/govtDetails";
                // window.location.href = "/govtDetails";
                // navigate("/govtDetails");
            } else if (User.step === 3) {
                path = "/addressDetails";
                // navigate("/addressDetails");
                // window.location.href = "/addressDetails";
            } else {
                // window.location.href = "/summary";
                path = "/summary";
                // navigate("/summary");
            }
            // navigate(path);
        }

        console.log(path);

        if (path != "") {
            console.log("INSIDE THIS");
            callPath(path);
        }

        const userObj = {
            ...User,
        };
        userObj["username"] = username;
        userObj["password"] = password;
        userObj["loggedIn"] = true;
        userObj["step"] = 1;

        setUser(userObj);
        document.getElementById("loginBtn").innerHTML = "LOGOUT";

        console.log(User);

        // localStorage.setItem("loggedIn", true);

        // UpdateInfo(username, "username");
        // UpdateInfo(password, "password");

        console.log("OITTTTTTTTTTT");

        navigate("/personalDetails");

        // event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username</label>
                <input
                    id="username"
                    type="text"
                    value={username}
                    required
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    type="password"
                    value={password}
                    required
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}
