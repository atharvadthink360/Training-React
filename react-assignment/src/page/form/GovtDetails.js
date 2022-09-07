import { useState } from "react";
import PersonalDetails from './PersonalDetails.js';

export default function GovtDetails() {
    const [aadhaar, setaadhaar] = useState('');
    const [pan, setpan] = useState('');
  
    function handleSubmit(event) {
      event.preventDefault();
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
            <button type="button" id="backBtn">Back</button>
            <button type="submit">Submit</button>
        </form>
    );
  }