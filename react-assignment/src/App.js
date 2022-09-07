import logo from './logo.svg';
import './App.css';
import Login from './page/login';
import React from 'react';
import GovtDetails from './page/form/GovtDetails';
import AllRoutes from './AllRoutes';
import ReactDOM from 'react-dom';
import AddressDetails from './page/form/AddressDetails';
import PersonalDetails from './page/form/PersonalDetails';
// import Login from './page/login';
import { Link,Route } from "react-router-dom";
import {BrowserRouter as Router, Routes} from 'react-router-dom';

export const UserContext = React.createContext();

function App() {
  return (
    <Router>
           <div className="App">
            
           <Routes>
                 <Route exact path='/' element={< Login />}></Route>
                 <Route exact path='/personalDetails' element={< PersonalDetails />}></Route>
                 <Route exact path='/govtDetails' element={< GovtDetails />}></Route>
                 <Route exact path='/addressDetails' element={< AddressDetails />}></Route>
          </Routes>
          </div>
       </Router>
  );
}

// ReactDOM.render(<AllRoutes/>, document.getElementById('root'));

export default App;