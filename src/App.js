import React from "react";
import "./App.scss";
import { Route, Routes, Link } from 'react-router-dom';
import Sign from './components/Sign';
import Login from './components/Login';
import Forget from './components/Forget';

function App() {
  return (
    <div className="all-container">
      <div className="container">
        <div className='member-container'>
          <div className="link-container">
            <Link to="/" className="bottom-line">LOGIN</Link>
            <Link to="/sign" className="bottom-line">SIGN IN</Link>
          </div>
          <div className="menu-container">
            <Routes>
              <Route path="/" exact element={<Login />} />
              <Route path="/sign" element={<Sign />} />
              <Route path="/forgetpassword" element={<Forget />} />
            </Routes>
          </div>
        </div>
        <div className="picture-container">
        </div>
      </div>
    </div>
  );
}
export default App;
