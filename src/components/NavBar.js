
   
import React from 'react';
import {NavLink, Link} from 'react-router-dom'


export default function NavBar() {

    let activeStyle = {
        backgroundColor: "lightblue"
    }
    // const Employee = ({employee})=>{
    //     return(<Link to={`/employee/show/${employee.id}`}>{employee.name}</Link>)
    // }
    return(
        <div className='container'>
            <nav className=''>
            <Link to="/">HOME</Link>
            
            {/* NavLink comes with a bool called 'isActive'. True when clicked, false when not clicked */}
            {/* <NavLink to="register" style={({isActive})=> isActive ? activeStyle : undefined }>REGISTER</NavLink>
            <br/>
            <NavLink to="login" style={({isActive})=>isActive ? activeStyle : undefined }>LOGIN</NavLink>
            <br/> */}
            {/* <NavLink to="editForm" style={({isActive})=>isActive?
            activeStyle : undefined }>submitChange</NavLink> */}
            <NavLink to="newForm" style={({isActive})=>isActive?
            activeStyle : undefined }>ADD EMPLOYEE</NavLink>
            <NavLink to="employees" style={({isActive})=>isActive ? activeStyle : undefined }>SEE ALL EMPLOYEES</NavLink>
            </nav>
        </div>
    )
}