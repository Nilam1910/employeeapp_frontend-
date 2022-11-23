
import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';


const EmployeeView = () => {
    let [employee, setEmployee] = useState({});
    let {id} = useParams()
    
    let baseUrl = 'http://localhost:8000'

    const getOneEmployeeById = (id) => {
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
      },[])

    return(
        <div className='view'>
       
        { employee &&
          <div>
            <h1>Name: {employee.name} </h1>
            <h3>Department:{employee.department} ({employee.id})</h3>
            <h3>Admin:{employee.admin}</h3>
          </div>
        }
       
        </div>
    )
}
        

export default EmployeeView