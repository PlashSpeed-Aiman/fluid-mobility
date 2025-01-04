import React, {memo} from 'react'
import '../index.css'

const Navbar = memo(() => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-brand">
                    <h1>FluidMobility</h1>
                </div>
                <div className="navbar-links">
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/services">Services</a>
                    <a href="/contact">Contact</a>
                </div>
            </div>
        </nav>
    )
})

export default Navbar