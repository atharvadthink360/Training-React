import { useState } from "react";
import PersonalDetails from './PersonalDetails.js';
import { Link,Route,useNavigate } from "react-router-dom";

export default function GovtDetails() {
    const [aadhaar, setaadhaar] = useState('');
    const [pan, setpan] = useState('');

    const navigate = useNavigate();

    const navigateToPD = () => {
        // 👇️ navigate to /contacts
        navigate('/personalDetails');
    };
  
    function handleSubmit(event) {
        event.preventDefault();
        navigate('/addressDetails');
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