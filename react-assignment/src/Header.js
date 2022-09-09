import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

// importing material UI components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import { infoContext } from "./infoContext";
import Login from "./page/login";

export default function Header() {
    var loginText = "";

    const navigate = useNavigate();

    const [User, setUser] = useContext(infoContext);

    useEffect(() => {}, [User]);

    function textChange() {
        if (User.loggedIn) {
            console.log("Button Press");
            document.getElementById("loginBtn").innerHTML = "LOGIN";
            User.loggedIn = false;
            document.getElementById("usernameVal").innerHTML = "";
            console.log(User);
            navigate("/");
        } else {
            document.getElementById("loginBtn").innerHTML = "LOGIN";
            navigate("/");
        }
    }

    // function loginLink() {
    //     window.location.href = "/login";
    // }

    useEffect(() => {
        if (User.username != null) {
            let loginVal = User.loggedIn;
            console.log(User.loggedIn);
            if (loginVal == false) {
                loginText = "Login";
                // document.getElementById("usernameVal").innerHTML = "";
            } else {
                loginText = "Signout";
                console.log("username", User.username);
                // let usernameVal = {User.username};
                // document.getElementById("usernameVal").style.display = "block";
                // document.getElementById("usernameVal").innerHTML =
                // "Hello, " + usernameVal + " !";
            }
        } else {
            loginText = "Login";
            // document.getElementById("usernameVal").innerHTML = "";
        }
    }, []);

    console.log(User);

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Info Tracker
                </Typography>
                {User.loggedIn ? (
                    <Typography
                        variant="h6"
                        fontSize={18}
                        component="div"
                        sx={{ flexGrow: 1 }}
                        id="usernameVal"
                    >
                        Hello, {User.username} !
                    </Typography>
                ) : (
                    ""
                )}
                <Button color="inherit" id="loginBtn" onClick={textChange}>
                    LOGIN
                    {/* {User.loggedIn ? "Logout" : "Login"} */}
                </Button>
            </Toolbar>
        </AppBar>
    );
}
