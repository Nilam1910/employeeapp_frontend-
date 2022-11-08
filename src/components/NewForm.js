import React, { Component } from 'react'

let baseURL = "http://localhost:8000/api/v1/employees/"
console.log('current base URL:' , baseURL)

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
           this.setState({
            name: '',
            department: '',
            admin: ''
           })
        })
        .catch(err => (console.log(err)))
   }
   
  render() {
    return (
      <div className='formContainer'>
         
        <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Name:  </label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    onChange={this.handleChange}
                    value={this.state.name}
                    placeholder="add a employee"
                />
                <br />
                <label htmlFor="name">Department:  </label>
                <input 
                    type="text" 
                    id="department" 
                    name="department" 
                    onChange={this.handleChange}
                    value={this.state.department}
                    placeholder="add a department"
                />
                <br />
                 <label htmlFor="name">Admin:  </label>
                <input 
                    type="text" 
                    id="admin" 
                    name="admin" 
                    onChange={this.handleChange}
                    value={this.state.admin}
                    placeholder="add a department"
                />
                <br />
                <input type="submit" value="Add Employee" />
            </form>
      </div>
    )
  }
}

export default NewForm
