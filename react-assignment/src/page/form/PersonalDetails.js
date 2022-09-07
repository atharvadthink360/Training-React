import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

export default function PersonalDetails() {
    const [fname, setFirstName] = useState('');
    const [lname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const navigate = useNavigate();
  
    function handleSubmit(event) {
        event.preventDefault();
        console.log('fname', fname);
        console.log('lname', lname);
        navigate('/govtDetails');
    }
  
    return (        
        <form onSubmit={handleSubmit}>
            <header>Step 1 of 3</header>
            <div>
            <label htmlFor="fname">First Name:</label>
            <input
                id="fname"
                type="text"
                value={fname}
                required
                onChange={(e) => setFirstName(e.target.value)}
            />
            </div>
            <div>
            <label htmlFor="lname">Last Name:</label>
            <input
                id="lname"
                type="text"
                value={lname}
                required
                onChange={(e) => setLastName(e.target.value)}
            />
            </div>
            <div>
            <label htmlFor="email">Email:</label>
            <input
                id="email"
                type="text"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
            />
            </div>
            <div>
            <label htmlFor="phone">Phone No:</label>
            <input
                id="phone"
                type="text"
                value={phone}
                required
                onChange={(e) => setPhone(e.target.value)}
            />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
  }