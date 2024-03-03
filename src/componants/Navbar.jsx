import React from 'react'

const Navbar = () => {
  return (
    <>
        <div className="navbar">
        <div className="nav-item logo">
          <p>React Project</p>
        </div>
        <div className="nav-item list">
          <a className="list-item"><b>Home</b></a>
          <a className="list-item">Categories</a>
          <a className="list-item">Products</a>
          <a className="list-item">Cart</a>
        </div>
        <div className="nav-item buttons">
          <a href="" className="nav-item-btn log">Signin</a>
          <a href="" className="nav-item-btn reg">Signup</a>
        </div>
      </div>
    </>
  )
}

export default Navbar
