import { useState } from "react";
import PersonalDetails from './PersonalDetails.js';

export default function GovtDetails() {

    const [flatno, setflatno] = useState('');
    const [bname, setbname] = useState('');
    const [city, setcity] = useState('');
    const [state, setstate] = useState('');

    const states = [ "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry"];
  
    function handleSubmit(event) {
      event.preventDefault();
    //   console.log('fname', fname);
    //   console.log('lname', lname);
    }
  
    return (        
        <form onSubmit={handleSubmit}>
            <header>Step 3 of 3</header>
            <div>
            <label htmlFor="flatno">Flat No.:</label>
            <input
                id="flatno"
                type="number"
                value={flatno}
                required
                onChange={(e) => setflatno(e.target.value)}
            />
            </div>
            <div>
            <label htmlFor="bname">Building Name.:</label>
            <input
                id="bname"
                type="text"
                value={bname}
                required
                onChange={(e) => setbname(e.target.value)}
            />
            </div>
            <div>
            <label htmlFor="city">City:</label>
            <input
                id="city"
                type="text"
                value={city}
                required
                onChange={(e) => setcity(e.target.value)}
            />
            </div>
            <div>
            <label htmlFor="city">City:</label>
            <input
                id="city"
                type="text"
                value={city}
                required
                onChange={(e) => setcity(e.target.value)}
            />
            </div>
            <div>
            <label htmlFor="state">State:</label>
            <input
                id="state"
                type="text"
                value={state}
                required
                onChange={(e) => setstate(e.target.value)}
            />
            </div>
            <button type="button" id="backBtn">Back</button>
            <button type="submit">Submit</button>
        </form>
    );
  }