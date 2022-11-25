import React, {useState , useEffect} from 'react'
import { useNavigate, useParams} from 'react-router-dom'

let baseURL = "http://localhost:8000"
console.log('current base URL:' , baseURL)

const EditForm = () => {
  const{id} = useParams()
  const[ name, setName] = useState('')
  const [department, setDepartment] = useState('')
  const [admin, setAdmin] = useState('')
  const navigate = useNavigate() 

  const getOneEmployeeById = () => {
    fetch(baseURL + "/api/v1/employees/" + id).then((res)=>{
          // console.log(res) worked
          return res.json()
        }).then((resp)=> {
          
          setName(resp.data.name)
          setDepartment(resp.data.department)
          setAdmin(resp.data.admin)
          // console.log(resp) // worked
        }).catch((err)=>{
          console.log(err.message)
        })
  }
  useEffect(()=>{
    getOneEmployeeById()
  },[]) //array of data  
  // console.log(name,department,admin,"state") //worked

    const handleSubmit = (e) => {
       e.preventDefault();
        const data = { name: name, department: department, admin: admin, id: id};
        console.log(data) // worked

        fetch(baseURL + "/api/v1/employees/" + id, {
            credentials: "include",
            method: "PUT",
            headers: {  
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
             
        }).then((res) => res.json())
        .then((data) => {
            console.log(data);
            navigate("/employees");
            window.location.reload("/employees")
        });
    }
         
  return(
  <div className='editFromContainer'>
       <h2>Edit Employee</h2>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name: </label>
        <input  
              id="name"  
              type="text" 
              name="name" 
              value={name} 
              onChange={(e)=>setName(e.target.value)} 
              placeholder='Employees Name'
        />
      <br />
        <label htmlFor="age">Department: </label>
          <input 
              id="department" 
              type="text" 
              name="department" 
              value={department} 
              onChange={(e)=>setDepartment(e.target.value)} 
              placeholder='Employees Department' 
          />
      <br />
        <label htmlFor="age">Admin: </label>
          <input  
              id="admin" 
              type="text"       
              name="admin" 
              value={admin} 
              onChange={(e)=>setAdmin(e.target.value)} 
              placeholder='Employees Admin' 
          />
      <br />
          <input type="submit" value="submit"  
          />
    </form>
  </div>
      
  )
}

export default EditForm
