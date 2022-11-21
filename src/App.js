   
import './App.css';
import React, { useState, useEffect } from 'react'
// import {Route, Routes} from 'react-router-dom'
import {Route, Routes, useNavigate} from 'react-router-dom'
import NavBar from './Components/NavBar'
import Home from './Components/Home'
// import LoginUser from './Components/LoginUser'
// import RegisterUser from './Components/RegisterUser'
import EmployeeContainer from './Components/EmployeeContainer'
import Footer from './Components/Footer'
import EmployeeView from './Components/EmployeeView'
import NewForm from './Components/NewForm';
import EditForm from './Components/EditForm';

let baseUrl = 'http://localhost:8000'
export default function App() {
  const [employees, setEmployees] = useState([])
  // const [oneEmployee, setOneEmployee] = useState({})
  
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
//////////////////////

  

///////////////////////////////////////////
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
          // return res.json()
          console.log(res)
        }).then(data => {
          // console.log(data.data) // worked
          getEmployees()
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
        {/* <Route path="register" element={<RegisterUser register={register} />}/>
        <Route path="login" element={<LoginUser loginUser={loginUser} />}/> */}
        <Route path='/newForm' element={<NewForm addEmployee={handleAddEmployee}/>}/>
        <Route path='/employees/EditForm/:id' element={<EditForm
        //  employees={employees} updateEmployee={updateEmployee}
         />}/>
        <Route path='employees' element={<EmployeeContainer employees={employees} deleteEmployee={deleteEmployee} />}/>
        <Route path='/employees/:id' element={<EmployeeView />}/>
        {/* not mandatory to put a "/" at the beginning of a route */}
      </Routes>
      {/* <Home />
      <RegisterUser register={register}/>
      <LoginUser loginUser={loginUser}/>
      <EmployeeContainer employees={employees}/> */}
      <Footer />
    </div>
  );
}


// heroku backend deployment
//https://emp-backend-app.herokuapp.com/api/v1/employees/
// how to set up react router
// https://www.freecodecamp.org/news/how-to-use-react-router-version-6/#:~:text=To%20install%20React%20Router%2C%20all,%2Drouter%2Ddom%406%20