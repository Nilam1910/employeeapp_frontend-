   
import './App.css';
import React, { useState, useEffect } from 'react'
import {Route, Routes, useParams} from 'react-router-dom'
// import {Route, Routes, useNavigate} from 'react-router-dom'
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
  const {id} = useParams()
  // const navigate = useNavigate()

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
      const addEmployee = (employee) => {
        this.employee((prev) => [
          ...prev,
          {
            ...employee,
            id: prev.length + 1,
          }
        ])
      }

      const updateEmployee = (employee) => {
        employee((prev) => {
          return prev.map((p) => {
            if(p.id === employee.id){
              return employee
          } else {
              return p
            }
          })
        })
      }

      const  deleteEmployee = (id) => {
        fetch(baseUrl + "/api/v1/employees/" + id,{
          method:'DELETE',
          credentials: "include"
        })
        .then(res => {
        
          // return res.json()
          console.log(res)
        }).then(data => {
          // console.log(data.data) // worked
          getEmployees()
        })
        // getEmployees((prev) => prev.filter((employee) => employee.id !== id))
      }
  useEffect(()=>{
    getEmployees()
    
  },[])
 
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        {/* <Route path="register" element={<RegisterUser register={register} />}/>
        <Route path="login" element={<LoginUser loginUser={loginUser} />}/> */}
        <Route path='employee/:id' element={<EditForm employee={updateEmployee} updateEmployee={updateEmployee}/> }/>
        
        {/* <Route path='employee/:id/editForm' element={<EditForm employee={getEmployee} employeeToEdit={employee} updateEmployee={updateEmployee} />}/> */}
        <Route path='/newForm' element={<NewForm   addEmployee={addEmployee}/>}/>
        <Route path="employees" element={<EmployeeContainer employees={employees} deleteEmployee={deleteEmployee}/>}/>
        {/* not mandatory to put a "/" at the beginning of a route */}
        <Route path="/employees/:id" element={<EmployeeView />}/>
      </Routes>
      {/* <Home />
      <RegisterUser register={register}/>
      <LoginUser loginUser={loginUser}/>
      <EmployeeContainer employees={employees}/> */}
      <Footer />
    </div>
  );
}




// how to set up react router
// https://www.freecodecamp.org/news/how-to-use-react-router-version-6/#:~:text=To%20install%20React%20Router%2C%20all,%2Drouter%2Ddom%406%20