import React, { Component, useState } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    person: [
      { name: 'Brittany', age: 27 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 25}
    ],
    otherState: 'some other value'
  };

  // const [otherState, setOtherState] = useState('some other value');

  // console.log(personState, otherState);

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // Don't do this: this.state.person[0].name = "Tiffany";
    this.setState({
      person: [
        { name: newName, age: 27 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 26}
      ]
    });
  }

  render () {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!!</p>
        <button onClick={() => this.switchNameHandler('Tiffany!!')}>Switch Name</button>
        <Person 
          name={this.state.person[0].name} 
          age={this.state.person[0].age}/>
        <Person 
          name={this.state.person[1].name} 
          age={this.state.person[1].age}
          click={this.switchNameHandler.bind(this, 'Tony!')} >My Hobbies: Racing</Person>
        <Person 
          name={this.state.person[2].name} 
          age={this.state.person[2].age}/>
      </div>
    );
  }

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
}

export default App;

// useState is a hook which returns an array with exactly 2 elements and always 2 elements

  // Can have as many useState calls as you want

// When using React hooks, you do not need to use class based components