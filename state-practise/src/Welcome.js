import React from 'react'

 function Welcome(props) {

const changHandler = (e) => {
        console.log(e);
}

const logoutHandler = () => {
    props.onlogout()
}

let content;

if(props.user === true){
    content = <>
    <h1>You are signed in as</h1>
    <button type='button' className='px-5 py-2 bg-blue-500 text-white text-xl roundex-xl mt-5' onClick={logoutHandler}>Sign out</button>
    </>
}else{
    content = <>
    <input type="text" className='border border-xl mt-1' placeholder='username' name="username" onChange={(e)=>{changHandler(e.target.value)}}/>
                <input type="text" className='border border-xl mt-1' placeholder='password' name="password" onChange={(e)=>{changHandler(e.target.value)}}/>
            <button type="button" className='px-5 py-2 bg-blue-500 text-white text-xl roundex-xl mt-5' onClick={props.onLogin}>Submit</button>
    </>
}

  return (
    <>
        <div className='w-1/4 mx-auto bg-orange-200 p-5'>
            <form className='flex flex-col'>
                {/* <h2>{props.title}</h2>
                <input type="text" className='border border-xl mt-1' placeholder='username' name="username" onChange={(e)=>{changHandler(e.target.value)}}/>
                <input type="text" className='border border-xl mt-1' placeholder='password' name="password" onChange={(e)=>{changHandler(e.target.value)}}/>
                <button type="button" className='px-5 py-2 bg-blue-500 text-white text-xl roundex-xl mt-5' onClick={props.onLogin}>Submit</button> */}
                {content}
            </form>
        </div>
    </>
  )
}

export default Welcome;
