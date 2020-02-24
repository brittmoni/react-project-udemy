import React from 'react';
import './Person.css';

// The props argument can be named anything but it is strongly recommended to use props as the name

// props.children will refer to anything that is within the component open and closing tags
const person = ( props ) => {
  return (
    <div className="Person">
      <p onClick={props.click}>I'm {props.name} and I am a {props.age} years old.</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  )

}

export default person;