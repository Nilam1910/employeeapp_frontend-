
import './App.css';
import React, { Component } from 'react'
// import NewForm from './Components/NewForm.js'

let baseURL = "http://localhost:8000/api/v1/employees/"
console.log('current base URL:' , baseURL)

 class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [{
        name: '',
        department: '',
        admin: ''
      }],
      baseURL:'http://localhost:8000/api/v1/employees/'
    }
  }
  getEmployees = () => {
    fetch(baseURL)
    .then(res => {
      if(res.status === 200) {
        return res.json()
      } else {
        return [];
      }
    })
    .then(data => {
      // grabbing data from db and updating state when components mount
      this.setState({
        employees:data.data
      })
    })
  }
  
  // handleAddDog = (employee) => {
    //   const copyDogs = [...this.state.employees]
    //   copyDogs.unshift(employee)
    //   this.setState({
      //     employees: copyEmployees,
      //     name: ''
      //   })
      // }
      
      // we then pass the method as a prop to NewForm 
      
      componentDidMount(){
        this.getEmployees();
      }
      
      render() {
        console.log("state",this.state.employees)
    return (
      <div className="container">
        <h1 className="text-center">Employee List</h1>
          {/* <NewForm handleAddHoliday={this.handleAddEmployee}/> */}
        <table id="employees">
          <tbody>
             {this.state.employees.map(employee => {
                console.log("this is a employee data", employee)
                return(
                  <tr>
                    <tr>
                     <th>Employee Name</th>
                     <th>Department</th>
                     <th>Admin</th>
                    </tr>
                    <tr>
                      <td key={employee._id}></td>
                    </tr>
                    <tr>
                      <td>{employee.name}</td>
                    </tr>
                    <tr>
                      <td>{employee.department}</td>
                    </tr>
                    <tr>
                      <td>{employee.admin}</td>
                    </tr>
                  </tr>
                  
                )
              })
            }
            
          </tbody>
        </table>
      </div>
      
    )
  }
}

export default App