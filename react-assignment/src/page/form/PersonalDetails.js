import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { infoContext } from "../../infoContext";
import "./PersonalDetails.css"
const axios = require("axios");

export default function PersonalDetails() {
    const navigate = useNavigate();

    useEffect(() => {
        if (User.loggedIn != null) {
            let loginVal = User.loggedIn;
            if (loginVal == false) {
                navigate("/");
            }
        } else {
            navigate("/");
        }
    }, []);

    const [User, setUser] = useContext(infoContext);

    console.log(User);

    const firstName = User.hasOwnProperty("fname") ? User["fname"] : "";
    const lastName = User.hasOwnProperty("lname") ? User["lname"] : "";
    const emailId = User.hasOwnProperty("email") ? User["email"] : "";
    const phoneNo = User.hasOwnProperty("phone") ? User["phone"] : "";

    const [fname, setFirstName] = useState(firstName);
    const [lname, setLastName] = useState(lastName);
    const [email, setEmail] = useState(emailId);
    const [phone, setPhone] = useState(phoneNo);

    const useUpdateInfo = (inp, key) => {
        useEffect(() => {
            const userObj = {
                ...User,
            };
            userObj[key] = inp;
            setUser(userObj);
        }, [inp]);
    };

    useUpdateInfo(fname, "fname");
    useUpdateInfo(lname, "lname");
    useUpdateInfo(email, "email");
    useUpdateInfo(phone, "phone");

    function handleSubmit(event) {
        event.preventDefault();
        console.log(User);

        const userObj = {
            ...User,
        };

        userObj["step"] = 2;
        setUser(userObj);

        const body = {
            first_name: fname,
            last_name: lname,
            email: email,
            phone: phone,
            username: userObj["username"],
        };

        let responseVal = axios.post(
            "http://localhost:8080/api/v1/updatePerson/",
            JSON.stringify(body)
        );

        // var urlLink = "http://localhost:8080/api/v1/person";

        // console.log(urlLink);

        // console.log(body);

        // const headers = {
        //     "Content-Type": "application/json",
        // };

        // let responseVal = axios({
        //     method: "put",
        //     url: urlLink,
        //     body,
        //     headers: headers,
        // });

        // let responseVal = axios.put(urlLink, JSON.stringify(body),Headers);

        navigate("/govtDetails");
    }

    return (
        <div className="personalDetails">
            <form onSubmit={handleSubmit}>
                <div className="header">
                    <span>Personal Details</span>
                </div>
                <div className="personal-details-form-container">
                    <div>
                        <br />
                        <input
                            className="input-label"
                            id="fname"
                            type="text"
                            placeholder="First Name"
                            value={fname}
                            required
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div>
                        <br />
                        <input
                            className="input-label"
                            id="lname"
                            type="text"
                            placeholder="Last Name"
                            value={lname}
                            required
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div>
                        <br />
                        <input
                            className="input-label"
                            id="email"
                            type="email"
                            placeholder="Email ID"
                            value={email}
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <br />
                        <input
                            className="input-label"
                            id="phone"
                            type="text"
                            placeholder="Phone No"
                            value={phone}
                            minLength={10}
                            maxLength={10}
                            // pattern="\d*"
                            required
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                </div>
                <br />
                <button
                    style={{
                        padding: 10,
                        fontSize: 15,
                        border: 0,
                        borderRadius: 15,
                    }}
                    id="submitBtn"
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}