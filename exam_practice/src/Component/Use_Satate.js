import React, { useState } from 'react';

function Use_Satate() {

  const [person, setPerson] = useState({});
  const [color, setcolor] = useState(false);

 
  const setPersonData = () => {
    setPerson({ name: "rahul", age: 21 });
    setcolor(true);

  };

  return (
    <div className={`container  rounded ${color ? 'bg-warning' : 'bg-light'}`}>
        <h3 className='text-center'>Example of Use State</h3>
      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>
      <button onClick={setPersonData} className='btn btn-success mb-3' >Set Person Data</button>
    </div>
  );
}

export default Use_Satate;
