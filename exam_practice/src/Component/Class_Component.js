import React, { Component } from 'react';

class Class_Component extends Component {
  render() {
    return (

      <div className='container rounded text-center bg-info '>
        
        <h1>Hello, {this.props.name}!</h1>
        <p>This is a class component.</p>
      </div>
    );
  }
}

export default Class_Component;