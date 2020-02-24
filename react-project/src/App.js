import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
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
      persons: [
        { name: newName, age: 27 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 26}
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Tiffany', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    })
  }

  render () {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!!</p>
        <button onClick={() => this.switchNameHandler('Tiffany!!')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Tony!')}
          changed={this.nameChangedHandler} >My Hobbies: Racing</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
    );
  }

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
}

export default App;

// useState is a hook which returns an array with exactly 2 elements and always 2 elements

  // Can have as many useState calls as you want

// When using React hooks, you do not need to use class based components