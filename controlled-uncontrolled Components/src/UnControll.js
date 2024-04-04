import React from 'react'
import { useRef } from 'react'


export default function UnControll() {

    const inputNameRef = useRef("rahul");
    const inputCityRef = useRef(null);
    const inputEmailRef = useRef(null);
    const inputPhoneNORef = useRef(null);

    function handleSubmit() {
        console.log(`Name: ${inputNameRef.current.value}\n City : ${inputCityRef.current.value}\nEmail : ${inputEmailRef.current.value}\nPhone No : ${inputPhoneNORef.current.value}`);
        alert(`Name: ${inputNameRef.current.value}\nCity : ${inputCityRef.current.value}\nEmail : ${inputEmailRef.current.value}\nPhone No : ${inputPhoneNORef.current.value}`);
    }
  return (
    <div>
    <div>
            <h3 className='' style={{ "textAlign": 'center' }}>UnControlled Component</h3>
            <form onSubmit={handleSubmit} className='container'>
                <div className="mb-3">
                    <label className='form-label'>Name :</label>
                    <input type='text' className='form-control'  ref={inputNameRef} />
                </div>

                <div className="mb-3">
                    <label className='form-label'>City :</label>
                    <input type='text' className='form-control' ref={inputCityRef} />
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

            
        </div>
    </div>
  )
}
