
   
import React from 'react';
import {NavLink, Link} from 'react-router-dom'


export default function NavBar() {

    let activeStyle = {
        backgroundColor: " #61dafb"
    }
    
    return(
        <div className='container'>
            <nav className=''>
            <Link to="/">HOME</Link>
            <NavLink to="newForm" style={({isActive})=>isActive?
            activeStyle : undefined }>ADD EMPLOYEE</NavLink>
            <NavLink to="employees" style={({isActive})=>isActive ? activeStyle : undefined }>SEE ALL EMPLOYEES</NavLink>
            </nav>
        </div>
    )
}