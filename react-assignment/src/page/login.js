import { useState } from "react";
import './login.css';


export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        console.log('username:', username);
        console.log('password:', password);
        
    }

    return (
        <div className="fullContent">
            <span className="Header">Think360</span><form onSubmit={handleSubmit}>
                <div className="Box">
                    <div className="content1">
                        <label htmlFor="username">Username</label>
                        <br />
                        <input
                            id="username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <br />
                    <div className="content2">
                        <label htmlFor="password">Password</label>
                        <br />
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <br />
                    <button type="submit">Submit</button>
                </div>
            </form>

        </div>

    );
}