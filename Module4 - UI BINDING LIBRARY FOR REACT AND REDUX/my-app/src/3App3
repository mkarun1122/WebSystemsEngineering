import React, {Component} from 'react';

import logo from './logo.svg';
import './App.css';


class App extends Component{

  constructor(){
    super()

    this.state ={
     monster:[
      {
        name: 'Institute of Aeronautical Engineering (IARE)',
        id:'a1'
      },
      {
        name: 'DUNDIGAL',
        id:'a2'
      },
      {
        name: 'Telangana',
        id:'a3'
      }

     ]
    };
  }

  render(){
    return (

          <div className="App">
            {
              this.state.monster.map(monster =>
                <h1 key={monster.id}> {monster.name}</h1>
      
              )
            }
          </div>

    );
  }
}

export default App;
