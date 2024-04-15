import React from 'react'
import '/src/styles/login.css'

const Login = () => {
  return (
    <div className='loginsection'>
        <form className='authform'>
        <h3>login</h3>
            <label>Email </label><br/>
            <input type="text" placeholder='Enter email'/><br/>
            <label>Password </label><br/>
            <input type="password" placeholder='Enter password'/>
            <div className="btnsubmit">
                <button>submit</button>
            </div>
        </form>
    </div>
  )
}

export default Login
