import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'iehigo', name: 'Brittany', age: 27 },
      { id: 'fehih', name: 'Manu', age: 29 },
      { id: 'giehoi', name: 'Stephanie', age: 25}
    ],
    otherState: 'some other value',
    showPersons: false
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

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons })
  }

  deletePersonHandler = (personIndex) => {
    // When updating state, you should update state immutably
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render () {
    // Styling a react component
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!!</p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
      </div>
    );
  }

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
}

export default App;

// useState is a hook which returns an array with exactly 2 elements and always 2 elements

  // Can have as many useState calls as you want

// When using React hooks, you do not need to use class based components