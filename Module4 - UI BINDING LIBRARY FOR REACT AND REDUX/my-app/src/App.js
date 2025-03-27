import React from 'react';

// import logo from './logo.svg';
import './App.css';


class App extends React.Component{

  constructor(){
    super()

    this.state ={
     monster:[]
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response => Response.json() )
    .then(users => this.setState({monster:users}))

  }

  render(){
    return (

          <div className="App">
            {
              this.state.monster.map(monster =>
                <h1 key={monster.id}> {monster.name} </h1>     
              )
            }
          </div>

    );
  }
}

export default App;
