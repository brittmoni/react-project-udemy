import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [ personState, setPersonState ] = useState({
    person: [
      { name: 'Brittany', age: 27 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 25}
    ],
    otherState: 'some other value'
  });

  const [otherState, setOtherState] = useState('some other value');

  console.log(personState, otherState);

  const switchNameHandler = () => {
    // console.log('Was clicked!');
    // Don't do this: this.state.person[0].name = "Tiffany";
    setPersonState({
      person: [
        { name: 'Tiffany', age: 27 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 26}
      ]
    });
  }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!!</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personState.person[0].name} age={personState.person[0].age}/>
        <Person name={personState.person[1].name} age={personState.person[1].age}>My Hobbies: Racing</Person>
        <Person name={personState.person[2].name} age={personState.person[2].age}/>
      </div>
    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
}

export default app;

// useState is a hook which returns an array with exactly 2 elements and always 2 elements

  // Can have as many useState calls as you want

// When using React hooks, you do not need to use class based components