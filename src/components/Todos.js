import React, { Component } from 'react';

class Todos extends Component {

  render(){

    var { items } = this.props;
    //let titles = items.todos.title
    
    console.log(items.todos)
    //console.log(titles)
    return (
      <div className='container'>
        <div className='main-content'>
          <h3 className='todo-title'>Todos</h3>
          <div>
            <div className='todo-item'>
              <p>One</p>
              <p>{}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Todos;