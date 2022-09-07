import { useState } from "react";
import { UserContext } from "../App";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    // const navigateToPD = () => {
    //     // 👇️ navigate to /contacts
    //     navigate('/personalDetails');
    // };

    // <Route path="/personalDetails" exact element={<PersonalDetails/>}/>
  
    function handleSubmit(event) {
        event.preventDefault();
        console.log('username:', username);
        console.log('password:', password);
        navigate('/personalDetails');
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }