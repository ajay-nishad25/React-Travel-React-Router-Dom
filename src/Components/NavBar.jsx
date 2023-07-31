import React from "react";
import "../CSS/navbar.css";

// Components import
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import ErrorPage from "./ErrorPage";
import Service from "./Service";

// React router import
import { Routes, Route, NavLink } from "react-router-dom";

import { Box } from '@mui/material';


const navLinkStyle = {
    textDecoration: 'none', 
  };



export default function NavBar() {
    return (
        <>
            <div className="navbar-container">
                <div className="company-logo">
                    React-Travel 
                </div>

                <div className="navigation-options">
                    <Box  component="span">
                        <NavLink to="/" style={navLinkStyle}>Home</NavLink>
                    </Box>
                    <Box  component="span">
                        <NavLink to="/about" style={navLinkStyle} >About</NavLink>
                    </Box>
                    <Box  component="span">
                        <NavLink to="/service" style={navLinkStyle} >Service</NavLink>
                    </Box>
                    <Box  component="span">
                        <NavLink to="/contact" style={navLinkStyle} >Contact</NavLink>
                    </Box>
                    <Box  component="span">
                    <button className="css-button-gradient--7">Sign up</button>
                    </Box>
                </div>

            </div>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="service" element={<Service />} />
                <Route path="contact" element={<Contact />} />
                {/* Error page code=> here path="*" indicate that the particular path entered by the user does not match with any of the path above */}
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </>
    );
}
