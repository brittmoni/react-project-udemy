import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    person: [
      { name: 'Brittany', age: 27 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 25}
    ]
  }

  switchNameHandler = () => {
    // console.log('Was clicked!');
    // Don't do this: this.state.person[0].name = "Tiffany";
    this.setState({
      person: [
        { name: 'Tiffany', age: 27 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 26}
      ],
      otherState: "Some value"
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.person[0].name} age={this.state.person[0].age}/>
        <Person name={this.state.person[1].name} age={this.state.person[1].age}>My Hobbies: Racing</Person>
        <Person name={this.state.person[2].name} age={this.state.person[2].age}/>
      </div>
    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
