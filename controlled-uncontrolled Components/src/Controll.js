import React, { useState } from 'react';
import { useRef } from 'react'

function Controll() {

    //controlled Components
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    // const [email, setEmail] = useState("");
    // const [phoneNumber, setPhoneNumber] = useState("");

    //uncontrolled Components
    const inputEmailRef = useRef(null);
    const inputPhoneNORef = useRef(null);

    const [showTable, setShowTable] = useState(false);

    function handleSubmit(e) {
        console.log(`Name: ${name} \nCity : ${city} \nEmail : ${inputEmailRef.current.value}\nPhone No : ${inputPhoneNORef.current.value}`);
        alert(`Name: ${name} \nCity : ${city} \nEmail : ${inputEmailRef.current.value}\nPhone No : ${inputPhoneNORef.current.value}`);
        e.preventDefault();
        setShowTable(true);
    }

    return (
        <div>
            <h3 className='' style={{ "textAlign": 'center' }}>Controlled/UnControlled Component</h3>
            <form onSubmit={handleSubmit} className='container'>
                <div className="mb-3">
                    <label className='form-label'>Name :</label>
                    <input type='text' className='form-control' value={name} onChange={(e) => setName(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label className='form-label'>City :</label>
                    <input type='text' className='form-control' value={city} onChange={(e) => setCity(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label className='form-label'>Email :</label>
                    <input type='email' className='form-control' ref={inputEmailRef} />
                </div>

                <div className="mb-3">
                    <label className='form-label'>Phone Number :</label>
                    <input type='number' className='form-control' ref={inputPhoneNORef} />
                </div>

                <button type="submit" className='btn btn-primary mt-2'>Submit</button>
            </form>

            {showTable && (
                <table className="table container">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>City</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{name}</td>
                            <td>{city}</td>
                            <td>{inputEmailRef.current.value}</td>
                            <td>{inputPhoneNORef.current.value}</td>
                        </tr>
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default Controll;
