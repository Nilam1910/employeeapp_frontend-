import React, {useState, useEffect} from 'react'

import { useNavigate, useParams } from 'react-router-dom'


let baseURL = "http://localhost:8000"
console.log('current base URL:' , baseURL)

const EditForm = (props) => {
//  const [employee, setEmployee] = useState(props.employeeToEdit)
  
   //  const navigate = useNavigate() 
   let {id} = useParams()
   
   let [employee, setEmployee] = useState({});
   // const [count, setCount] = useState(-1)
   // let {id} = useParams()
   
  //  let baseUrl = 'http://localhost:8000'

  //  const getOneEmployeeById = (index) => {
  //      // fetch to the backend
  //      fetch(baseUrl + "/api/v1/employees/" + index,{
  //        credentials: "include"
  //      })
  //      .then(res => {
  //        if(res.status === 200) {
  //          return res.json()
  //        } else {
  //          return []
  //        }
  //      }).then(data => {
  //        console.log(data.data)
  //        setEmployee(data.data)
  //      })
  //    }
  //    useEffect(()=>{
  //     getOneEmployeeById(id)
         
      
  //   },[])


    // const handleOnChange = (e) => {
    //   setEmployee((prev) => ({...employee, [e.target.name]: e.target.value}))
    // }
   
    const handleSubmit = (e, index) => {
      e.preventDefault()
      fetch(baseURL + "api/v1/employees/" + props.employees[index]._id, {
         // credentials: "include",
         method: 'PUT',
         body:JSON.stringify({
            name: e.target.name.value,
            department: e.target.department.value,
            admin: e.target.admin.value
         }),
         headers:{ 'Content-Type': 'application/json'}
      }).then (res => {
            console.log(res)
            if(res.ok){
               return res.json()
            }
         })
        .then (resJson => {
           console.log('EditForm - resJson', resJson)
           props.updateEmployee(resJson)
         //   setEmployee({ // to clear the content after submit
         //    // name: props.employees[props.employeeIndex].name,
         //    // department: props.employees[props.employeeIndex].department,
         //    // admin: props.employees[props.employeeIndex].admin
         //   })
            props.employees[index].name = e.target.name.value
            props.employees[index].department = e.target.department.value
            props.employees[index].admin = e.target.admin.value
        })
        .catch(err => (console.log(err)))
    }
    
     

  return(
     <div className='editFromContainer'>
    <form onSubmit={(e)=>handleSubmit(e.props.employeeIndex)}>
      <label htmlFor="name">Name</label>
      <input id="name" type="text" name="name" value={employee.name} onChange={(e)=>props.setState.name=e.target.value} />
      <br />
      <br />
      <label htmlFor="age">Department</label>
      <input id="age" type="text" name="age" value={employee.department} onChange={(e)=>props.setState.department=e.target.value} />
      <br />
      <br />
      <label htmlFor="age">Admin</label>
      <input id="age" type="text" name="age" value={employee.admin} onChange={(e)=>props.setState.admin=e.target.value} />
      <br />
      <br />
      <input type="submit" value="updateEmployee" 
      // onClick={(updateEmployee)=>{navigate(Home)}}
      />
    </form>
      
    </div>
  )
}

export default EditForm



/////////////////////////////////////////////////////////////////////////////////////////////////////

