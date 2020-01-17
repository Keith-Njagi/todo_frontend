import React, { Component } from 'react'

class AddTodo extends Component {
  constructor() {
    super()
    this.state = {
      title:'',
      description:''
    }
    this.handleChange =this.handleChange.bind(this)
  }
  handleChange(event){
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  render() {
    return(
      <form>
        <input type='text' name='title' value={this.state.title} placeholder='Title' onChange={this.handleChange} />
        <textarea type='text' name='description' value={this.state.description} placeholder='Description' onChange={this.handleChange} />
        <button>Submit</button>
      </form>
    )
  }
}

export default AddTodo