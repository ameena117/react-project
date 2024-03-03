import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="nav-item logo">
          <p>React Project</p>
        </div>
        <div className="nav-item list">
          <Link to={'/'} className="list-item"><b>Home</b></Link>
          <Link to={'/categories'} className="list-item">Categories</Link>
          <Link to={'/products'} className="list-item">Products</Link>
          <Link to={'/cart'} className="list-item">Cart</Link>
        </div>
        <div className="nav-item buttons">
          <Link to={'/signin'} className="nav-item-btn log">Signin</Link>
          <Link to={'/signup'} className="nav-item-btn reg">Signup</Link>
        </div>
      </div>
    </>
  )
}

export default Navbar