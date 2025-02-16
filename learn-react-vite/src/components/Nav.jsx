import React from 'react'
import { Link } from "react-router"

function Nav() {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
    </nav>
  )
}

export default Nav;