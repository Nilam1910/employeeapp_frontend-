import React, {useState , useEffect} from 'react'
import { useNavigate, useParams} from 'react-router-dom'

// let baseURL = "http://127.0.0.1:8000" // HAVE TRIED THIS ONE STILL NO DIFF// https://stackoverflow.com/questions/49343024/getting-typeerror-failed-to-fetch-when-the-request-hasnt-actually-failed
let baseURL = "http://localhost:8000"
console.log('current base URL:' , baseURL)

const EditForm = () => {
  // props.preventDefault()
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
          // console.log(resp) worked
        }).catch((err)=>{
          console.log(err.message)
        })
  }
  useEffect(()=>{
    getOneEmployeeById()
  },[])//array of data  
  // console.log(name,department,admin,"state")


 
      const handleSubmit = (e) => {
       e.preventDefault();
        const data = { name: name, department: department, admin: admin, id: id};
        console.log(data)
        let cono = baseURL + "/api/v1/employees/" + id
        console.log(cono)

        let he = fetch(baseURL + "/api/v1/employees/" + id, {
            credentials: "include",
            method: "PUT",
            // mode: 'no-cors',
            headers: { // the problem here is core is not allowing Access to change the route 3000 to 8000 
              // https://stackoverflow.com/questions/61899340/receiving-a-cors-error-when-to-my-react-app-using-fetch-function
              // "Access-Control-Allow-Origin" : "http://localhost:3000",
              // "Access-Control-Allow-Credentials" : "true"
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then((res) => res.json())
        .then((data) => {
            console.log(data);
            navigate("/employees");
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



/////////////////////////////////////////////////////////////////////////////////////////////////////


  //  const getOneEmployeeById = (id) => {
  //      // fetch to the backend
  //      fetch(baseURL + "/api/v1/employees/" + id,{
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
  //        getOneEmployeeById(data)
  //      })
  //    }
    

    //  useEffect(()=>{
    //   const employee = getOneEmployeeById()
    //     getOneEmployeeById()
    //     setName(employee.name) 
    //     setDepartment(employee.department)
    //     setAdmin(employee.admin)
      
    // },[getOneEmployeeById(id)])

    // const handleOnChange = (e) => {
    //   setEmployee((prev) => ({...employee, [e.target.name]: e.target.value}))
    // }


    ////////////////////////////////////////////////////

    // class EditForm extends Component {
    //   constructor(props) {
    //     super(props)
    //     this.state = {
    //       name: this.props.employee[this.props.employeeIndex].name,
    //       department: this.props.employee[this.props.employeeIndex].department,
    //       admin: this.props.employees[this.props.employeeIndex].admin
          
    //     }
    //   }
    
    //   handleSubmit = (e, index) => {
    //        e.preventDefault()
    //        console.log(e)
    //        fetch(baseURL +'/api/v1/employees/' + this.props.employees[index]._id, {
    //            method: 'PUT',
    //            body: JSON.stringify({
    //              name: e.target.name.value,
    //              department: e.target.department.value,
    //              admin:e.target.department.value
    //            }),
    //            headers: {
    //              'Content-Type' : 'application/json'
    //            }
    //        })
    //        .then(res => {
    //            if (res.ok) {
    //                return res.json()
    //            }
    //        })
    //        .then(resJson => {
    //          this.props.employees[index].name = e.target.name.value
    //          this.props.employees[index].department = e.target.department.value
    //          this.props.employees[index].admin = e.target.admin.value
            
    //        })
    //        .catch(err => (console.log(err)))
    //    }
    
    //  render() {
    //    {console.log(this.props.employeeIndex)}
    //    return (
    //      <div className="formContainer">
    //      <h1 className="h1-register">Edit employee</h1>
    //        <form onSubmit={(e)=>{this.handleSubmit(e, this.props.employeeIndex)}}>
    //          <label className="label1" htmlFor="name"> Name: </label>
    //            <input
    //              className="username"
    //              type="text"
    //              id="name"
    //              name="name"
    //             //  defaultValue={this.state.name}
    //              onChange={(e) => this.setState.name = e.target.value}
    //              placeholder="enter a name"
    //          />
    //          <label className="label1" htmlFor="department"> Department: </label>
    //            <input
    //              className="username"
    //              type="text"
    //              id="department"
    //             //  defaultValue={this.state.department}
    //              onChange={(e) => this.setState.department = e.target.value}
    //              name="department"
    //              placeholder="enter a department"
    //          />
    //          <label className="label1" htmlFor="admin"> Admin: </label>
    //            <input
    //              className="username"
    //              id="admin"
    //             //  defaultValue={this.state.admin}
    //              onChange={(e) => this.setState.admin = e.target.value}
    //              name="admin"
    //              placeholder="enter name of admin"
    //          />
           
    //            <input className="edit" type="submit" value="Edit Employee" />
              
    //        </form>
    //      </div>
    //    )
    //  }
    // }
//***************************************************************************** */
    // // useEffect(() =>{
  //   fetch(baseURL + "/api/v1/employees/" + id).then((res)=>{
  //     // console.log(res) worked
  //     return res.json()
  //   }).then((resp)=> {
      
  //     setName(resp.data.name)
  //     setDepartment(resp.data.department)
  //     setAdmin(resp.data.admin)
  //     // console.log(resp) worked
  //   }).catch((err)=>{
  //     console.log(err.message)
  //   })
    
  // },[])
  //   const handleSubmit = async (e) => {
  //     e.preventDefault()
  //     const data = { name: name, department: department, admin: admin };
  //     try {
  //         const response = await fetch(baseURL + "/api/v1/employees/" + id, {
  //             method: "PUT",
  //             headers: {
  //                 "Content-Type": "application/json",
  //             },
  //             body: JSON.stringify(data),
  //         })
  //         const data1 = await response.json()
  //         console.log(response, data1)
  //         // navigate("/employees");
  //     } catch (error) {
  //         console.error(error)
  //     }
  // }

  //@@@@@@@@@@@@@@@@@@@@@ debug by Nikki @@@@@@@@@@@@@@@@@@@@@@@@@
    // const handleSubmit = (e)=>{
  //   e.preventDefault()
  //   const data = {name:name,department:department,admin:admin}
  //   console.log(baseURL + "/api/v1/employees/" + id, typeof id)
  //   fetch(baseURL + "/api/v1/employees/" + id,{
  //     method: "PUT",
  //     body: JSON.stringify(data),
  //     // headers: {"Content-type": "Application/json"}
  //     headers:{'Access-Control-Allow-Origin': '*',
  //     'Content-Type': 'application/json'}
  //   }).then(res =>{
  //     return res.json()
  //   }).then(res =>{
  //     if(res.status === 200 ){
  //       console.log("Good")
  //     }else{
  //       console.log(res.error)
  //     }
  //   }).catch(err => {
  //     console.log(err)
  //   })
  // }

    // const handleSubmit= async:(e)=>{
    //     e.preventDefault()
    //     const employeeData = {name:name,department:department,admin:admin}
    //     // console.log(employeeData)
    //     // console.log(baseURL + '/api/v1/employees/' + id )
    //     let res=await fetch(baseURL + "/api/v1/employees/" + id, {
    //       method: "PUT",
    //       body:JSON.stringify(employeeData),
    //       headers:{ "Content-Type":"Application/json"},
    //       // credentials: "include"  // this needed for register route or login
    //     })
    //     console.log(res)
    //     let data =await res.json()
    //     console.log(data)

    //     // .then((res)=>{
    //     //       console.log(res)
    //     //       alert("Updated Employee Successfully 🎉 ")
    //     //       navigate('/')
    //     //     })
    //     //     .catch((err) =>{
    //     //       console.log(err.response)
    //     //       console.log(err.response.status)
    //     //       console.log(err.response.headers)
    //     //     })
    //   }

    //___________________________DAVE________________________

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     try {
  //         const response = await fetch( baseURL + "/api/v1/employees/" + id,{
  //             method: 'PUT',
  //             credentials: 'include',
  //             headers: {'Content-Type': 'application/json'},
  //             body: JSON.stringify({name: name, department:department, admin:admin})
  //         });
  //         if(response.ok){
  //             const jsonResponse = await response.json();
  //             const {data} = jsonResponse;
  //             // setUser(data);
  //             navigate(`/`);
  //         }
  //     } catch (error) {
  //         console.error(error);
  //     }
  // }