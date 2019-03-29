import React from 'react'
import './Header.css'
import {Link} from "react-router-dom";

const Header = () => (
  <div className="header">
    <ul>
      <Link to="/">Landing</Link>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
    </ul>
  </div>
)

export default Header