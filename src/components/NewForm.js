import React, { Component } from 'react'
import {useNavigate} from 'react-router-dom';
import EmployeeContainer from './EmployeeContainer';

let baseURL = "http://localhost:8000/api/v1/employees/"
console.log('current base URL:' , baseURL)

const navigate = useNavigate

export class NewForm extends Component {
   constructor(props) {
     super(props)
     this.state = {
        name: '',
        department: '',
        admin: ''
     }
   }
   handleChange = (event) => {
      this.setState({
         [event.target.id]:event.target.value
      })
   }
   handleSubmit = (event) => {
      event.preventDefault()
      fetch(baseURL, {
         method: 'POST',
         body:JSON.stringify({
            name: this.state.name,
            department: this.state.department,
            admin: this.state.admin
         }),
         headers:{ 'Content-Type': 'application/json'}
      }).then (res => {
            if(res.ok){
               return res.json()
            }
         })
        .then (resJson => {
           console.log('NewForm - resJson', resJson)
           this.props.handleAddEmployee(resJson)
           this.setState({ // to clear the content after submit
            name: '',
            department: '',
            admin: ''
           })
         })
        .catch(err => (console.log(err)))
   }

   
  render() {
    return (
       
      <div className='newFormContainer'>
         
        <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Name:  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    onChange={this.handleChange}
                    value={this.state.name}
                    placeholder="Employee Name"
                  />
                <br />
                <label htmlFor="name">Department:  </label>
                  <input 
                    type="text" 
                    id="department" 
                    name="department" 
                    onChange={this.handleChange}
                    value={this.state.department}
                    placeholder="Employee Department"
                  />
                <br />
                 <label htmlFor="name">Admin:  </label>
                  <input 
                    type="text" 
                    id="admin" 
                    name="admin" 
                    onChange={this.handleChange}
                    value={this.state.admin}
                    placeholder="Employee Admin"
                  />
                <br />
                  <input type="submit" value="Add Employee" 
                  onClick={()=>{navigate(`${EmployeeContainer}`)}}
                  />
            </form>
      </div>
   
      )
   }
}

export default NewForm
