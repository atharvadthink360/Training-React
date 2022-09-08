import React, { useState, useEffect, useContext } from "react";
import { Link, Route, useNavigate } from "react-router-dom";
import { infoContext } from "../infoContext.js";

export default function Summary() {
    const [User, setUser] = useContext(infoContext);

    return (
        <React.Fragment>
            <div>{User.fname}</div>
            <div>{User.lname}</div>
            <div>{User.email}</div>
        </React.Fragment>
    );
}
