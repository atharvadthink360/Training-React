import { useState,useEffect,useContext } from "react";
import PersonalDetails from './PersonalDetails.js';
import { Link,Route,useNavigate } from "react-router-dom";
import { infoContext } from "../../infoContext";

export default function GovtDetails() {

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

    const aadhaarno = User.hasOwnProperty("aadhaar") ? User["aadhaar"] : "";
    const panno = User.hasOwnProperty("pan") ? User["pan"] : "";

    const [aadhaar, setaadhaar] = useState(aadhaarno);
    const [pan, setpan] = useState(panno);

    const useUpdateInfo = (inp, key) => {
        useEffect(() => {
            const userObj = {
                ...User,
            };
            userObj[key] = inp;
            setUser(userObj);
        }, [inp]);
    };

    useUpdateInfo(aadhaar, "aadhaar");
    useUpdateInfo(pan, "pan");

    const navigateToPD = () => {
        // 👇️ navigate to /contacts
        navigate("/personalDetails");
    };

    function handleSubmit(event) {
        event.preventDefault();

        const userObj = {
            ...User,
        };

        userObj["step"] = 3;
        setUser(userObj);

        navigate("/addressDetails");
        //   console.log('fname', fname);
        //   console.log('lname', lname);
    }

    function handleBack(event) {
        event.preventDefault();
        PersonalDetails();
    }
  
    return (        
        <form onSubmit={handleSubmit}>
            <header>Step 2 of 3</header>
            <div>
            <label htmlFor="aadhaar">Aadhaar No.:</label>
            <input
                id="aadhaar"
                type="number"
                value={aadhaar}
                required
                onChange={(e) => setaadhaar(e.target.value)}
            />
            </div>
            <div>
            <label htmlFor="pan">PAN No.:</label>
            <input
                id="pan"
                type="text"
                value={pan}
                required
                onChange={(e) => setpan(e.target.value)}
            />
            </div>

            {/* <Link to="/personalDetails">Back</Link> */}

            <button type="button" id="backBtn" onClick={navigateToPD}>Back</button>
            <button type="submit">Submit</button>
        </form>
    );
  }