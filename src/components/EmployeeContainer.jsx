import {useNavigate} from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import {RiDeleteBin6Fill} from "react-icons/ri";
import {BsFillPencilFill} from 'react-icons/bs'


let baseUrl = "http://localhost:8000"
console.log('baseUrl employeeContainer: ', baseUrl)

const EmployeeContainer = (props) =>{
  console.log(props)
    const navigate = useNavigate()
   
  return (
    <div className="app-container">
      <h2> Employees List </h2>
      <Table striped  >
        <tbody className='tbody'> 
        
          <tr>
            <th>Employee Name</th>
            <th>Department</th>
            <th>Admin</th>
            <th>Option</th>
            <th></th>
          </tr>
            { props.employees.map((employee) => {   
                  return (
                  <tr className='table-tr' key={employee.id}>
                    <td style={{textDecoration: "underline", color: "blue"}}
                        onClick={()=>{navigate(`${employee.id}`)}}>
                        { employee.name }
                    </td>
                    <td>{ employee.department }</td>
                    <td>{ employee.admin }</td>
                    <td>
                      <button className="btnOne" style={{ color:"purple"}} 
                        onClick={()=>{navigate(`/employees/EditForm/${employee.id}`)}}
                      ><BsFillPencilFill/>
                      </button>
                    </td>
                    <td>
                      <button className="btnTwo" style={{color: "red"}} 
                        onClick={()=>props.deleteEmployee(employee.id)}><RiDeleteBin6Fill/>
                      </button>
                    </td>
                  </tr> 
                )
              })
            }  
      
        </tbody>
      </Table>
    </div>
  )
}                 

export default EmployeeContainer


