import React, { Component } from 'react';
import Header from './components/Header';
import Todos from './components/Todos';
import Footer from './components/Footer';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    }
  }

  componentDidMount() {
    fetch('http://api-simple-todo.herokuapp.com/api/todos/', {mode: 'cors'})
    .then(response => response.json()) 
    .then(data => {
      this.setState({
        isLoaded:true,
        items: data,
      })
    });
  }

  render () {
    return(
      <div>
        <Header />
        {this.state.isLoaded ? <Todos items={this.state.items}/> : 
          <div className='container'>
            <div className='main-content'>
              <div>
                <div className='todo-item'>
                  <p>Loading...</p>
                </div>
              </div>
            </div>
          </div>
        }
        
        <Footer />
      </div>
    );
  }
}

export default App;
