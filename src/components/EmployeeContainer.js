import {useNavigate} from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import {RiDeleteBin6Fill} from "react-icons/ri";
import {BsFillPencilFill} from 'react-icons/bs'



let baseUrl = "http://localhost:8000"
console.log('baseUrl employeeContainer: ', baseUrl)

const EmployeeContainer = (props) =>{
  // const [employee, setEmployee] = useState([])
    const navigate = useNavigate()
    
  //   useEffect(()=>{
     
  //     setEmployee()
      
  //   },[])
   
  return (
    <div className="app-container">
      <h2> Employees List </h2>
      <Table striped  >
        <tbody> 
          <tr>
            <th>Employee Name</th>
            <th>Department</th>
            <th>Admin</th>
            <th>Option</th>
          </tr>
              {props.employees.map((employee, i) => {
                        console.log('this is employee data ', employee) // worked
                    
                    const updateEmployee = (id) => {
                    //  window.location.href="https://emp-backend-app.herokuapp.com" + id
                    }  
                  return (
                    
                  <tr key={employee.id}>
                    <td style={{textDecoration: "underline", color: "blue"}}onClick={()=>{navigate(`${employee.id}`)}}>
                      { employee.name }
                    </td>
                    <td>{ employee.department }</td>
                    <td>{ employee.admin }</td>
                    
                    <td><button style={{textDecoration: "underline", color: "purple"}} 
                    // onClick={(props.updateEmployee(employee.id))}
                    >
                      <BsFillPencilFill/></button></td>

                    <td><button style={{textDecoration: "underline", color: "red"}} onClick={()=>props.deleteEmployee(employee.id)}><RiDeleteBin6Fill/></button></td> 
                      {/* <button onClick={()=>this.state({employeeName: employeeName,employeeDepartment: employeeDepartment, employeeAdmin: employeeAdmin})}>EDIT</button>
                      <EditFrom show={setState.EditFormShow}
                      onHide={editFormClose}
                      employeeName={employeeName}
                      employeeDepartment={employeeDepartment}
                      employeeAdmin={employeeAdmin} /> */}
                  </tr> 
                  )
                })
              }  
        </tbody>
      </Table>
    </div>
  )
}                 
// const  deleteEmployee = (id) => {
// getEmployees((prev) => prev.filter((employee) => employee.id !== id))
// }
export default EmployeeContainer

// https://blog.devgenius.io/react-bootstrap-grid-layout-c9bea6fd
// https://react-bootstrap.github.io/components/buttons/
