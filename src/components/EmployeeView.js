
import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';


const EmployeeView = (props) => {
    let [employee, setEmployee] = useState({});
    let {id} = useParams()
    
    let baseUrl = 'http://localhost:8000'

    const getOneEmployeeById = (id) => {
        // fetch to the backend
        fetch(baseUrl + "/api/v1/employees/" + id,{
          credentials: "include"
        })
        .then(res => {
          if(res.status === 200) {
            return res.json()
          } else {
            return []
          }
        }).then(data => {
          console.log(data.data)
          setEmployee(data.data)
        })
      }

      useEffect(()=>{
        getOneEmployeeById(id)
      })

    return(
        <div className='view'>
        {/* <img src="https://cdn0.iconfinder.com/data/icons/dog-and-cat-4/64/12-siberian_husky-canine-puppy-pets-avatar-animals-animal-dog-512.png"></img> */}
       

        <h1>{employee.name} </h1>

        <h3>Department:{employee.department}</h3>
       
        <p>Admin:
          {employee.admin}
        </p>
       
        </div>

    )
}

export default EmployeeView