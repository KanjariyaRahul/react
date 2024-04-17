import React, {useRef, useState } from 'react';

const Input = () => {
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const inputNameRef = useRef(null);
    const inputCityRef = useRef(null);
    const [color, setColor] = useState('lightblue');

    function handleSubmit(e) {
        alert(`\nName: ${inputNameRef.current.value} \nCity: ${inputCityRef.current.value}`);
        e.preventDefault();
        setColor(color === 'lightblue' ? 'lightgreen' : 'lightblue');
    }
    return (
        <div className='container border rounded mt-3 py-3 ' style={{ backgroundColor: color, padding: '20px' }} >
            <h3 className='' style={{ textAlign: 'center' }}>Example: Get some inputs and display appropriately</h3>
            <form  className='container ' >
                <div className="mb-3">
                    <label className='form-label'>Name :</label>
                    <input type='text' className='form-control' value={name} onChange={(e) => setName(e.target.value)} ref={inputNameRef} />
                    <p className='font-bold'>Name is : {name}</p>
                </div>

                <div className="mb-3">
                    <label className='form-label'>City :</label>
                    <input type='text' className='form-control' value={city} onChange={(e) => setCity(e.target.value)} ref={inputCityRef} />
                    <p className='font-bold'>City is : {city}</p>
                </div>
                <button type="submit" onClick={handleSubmit} className='btn btn-primary mt-2'>Submit</button>
            </form>
        </div>
    )
}

export default Input;
