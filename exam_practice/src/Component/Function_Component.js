import React from 'react';

const Function_Component = (props) => {
  return (
    <div className='container rounded bg-dark text-white text-center'>
      <h1 style={{ color: props.color || "red"}}>Title: {props.name}</h1>
      <h1>Hello, {props.name} {props.cloor}!</h1>
      <p>This is a functional component.</p>
    </div>
  );
}

export default Function_Component;
