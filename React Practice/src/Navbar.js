import React from 'react';
import {
    Link
}  from 'react-router-dom';

const Navbar = () =>  (
    <ul>
        <li><Link to='/'>home</Link></li>
        <li><Link to='/About'>about</Link></li>
        </ul>
)
export default Navbar;