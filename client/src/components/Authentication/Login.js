import React from 'react'

function Login() {
  return (
    <div className='main-container'>
        <div className='.login-sec'>
            <div className='form'>
                <h5>Appoint</h5>
                <h5>Login</h5>
                <p>How to i get started lorem ipsum dolor at?</p>
            </div>
            <form>
                <label>
                    <input type="text" placeholder='Username' name="name" /><br/>
                </label>
                <label>
                <input type="password" placeholder='password' name="name" /><br/>
                </label>
                <input type="submit" value="Login Now" />
            </form>
            
        </div>


    </div>
  )
}

export default Login