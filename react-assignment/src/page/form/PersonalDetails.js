import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { infoContext } from "../../infoContext";
import "./PersonalDetails.css"

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

    // const [contextVal, setContext] = useContext(infoContext);
    // const [val, setVal] = useState(valInp);

    useUpdateInfo(fname, "fname");
    useUpdateInfo(lname, "lname");
    useUpdateInfo(email, "email");
    useUpdateInfo(phone, "phone");

    // useEffect(() => {
    //     const userObj = {
    //         ...User
    //     }
    //     userObj["fname"] = fname;
    //     setUser(userObj);
    // }, [fname]);

    // useEffect(() => {
    //     const userObj = {
    //         ...User
    //     }
    //     userObj["lname"] = lname;
    //     setUser(userObj);
    // }, [lname]);

    // useEffect(() => {
    //     const userObj = {
    //         ...User
    //     }
    //     userObj["email"] = email;
    //     setUser(userObj);
    // }, [email]);

    // useEffect(() => {
    //     const userObj = {
    //         ...User
    //     }
    //     userObj["phone"] = phone;
    //     setUser(userObj);
    // }, [phone]);

    function handleSubmit(event) {
        event.preventDefault();
        // console.log('fname', fname);

        // console.log('lname', lname);
        console.log(User);

        const userObj = {
            ...User,
        };

        userObj["step"] = 2;
        setUser(userObj);

        navigate("/govtDetails");

        // if (correctFirstName && correctLastName && correctEmail && correctPhone){
        //     navigate('/govtDetails');
        // }
    }

    return (
        <div className="personalDetails">
            <form onSubmit={handleSubmit}>
                <div className="header">
                    <span>Personal Details</span>
                </div>
                <div className="personal-details-form-container">
                    <div>
                        {/* <label htmlFor="fname">First Name:</label> */}
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
                        {/* <label htmlFor="lname">Last Name:</label> */}
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
                        {/* <label htmlFor="email">Email:</label> */}
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
                        {/* <label htmlFor="phone">Phone No:</label> */}
                        <br />
                        <input
                            className="input-label"
                            id="phone"
                            type="type"
                            placeholder="Phone No"
                            value={phone}
                            minLength={10}
                            maxLength={10}
                            pattern="\d*"
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