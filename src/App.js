   
import './App.css';
import React, { useState, useEffect } from 'react'
import {Route, Routes, useNavigate} from 'react-router-dom'
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import EmployeeContainer from './Components/EmployeeContainer'
import Footer from './Components/Footer'
import EmployeeView from './Components/EmployeeView'
import NewForm from './Components/NewForm';
import EditForm from './Components/EditForm';

let baseUrl = 'http://localhost:8000'
export default function App() {
  const [employees, setEmployees] = useState([])

  const navigate = useNavigate()

  const getEmployees = () => {
    // fetch to the backend
    fetch(baseUrl + "/api/v1/employees/",{
      credentials: "include"
    })
    .then(res => {
      if(res.status === 200) {
        return res.json()
      } else {
        return []
      }
    }).then(data => {
      // console.log(data.data) // worked
      setEmployees(data.data)
    })
  }

      const handleAddEmployee = () => {
        getEmployees()
        navigate("/employees")
      }

      const  deleteEmployee = (id) => {
        fetch(baseUrl + "/api/v1/employees/" + id,{
          method:'DELETE',
          credentials: "include"
        })
        .then(res => {
          alert("Employee Deleted Successfully 🎉 ")
          // return res.json() // worked
          console.log(res)
        }).then(data => {
          // console.log(data.data) // worked
          getEmployees()
          // window.location.reload("/employees")
        })
        
      }

  useEffect(()=>{
    getEmployees()
    
  },[])
 
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/newForm' element={<NewForm addEmployee={handleAddEmployee}/>}/>
        <Route path='/employees/EditForm/:id' element={<EditForm/>}/>
        <Route path='employees' element={<EmployeeContainer employees={employees} deleteEmployee={deleteEmployee} />}/>
        <Route path='/employees/:id' element={<EmployeeView />}/>
        {/* not mandatory to put a "/" at the beginning of a route */}

      </Routes>
     
      <Footer />
    </div>
  );
}

