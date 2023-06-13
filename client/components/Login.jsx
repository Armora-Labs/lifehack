import React from 'react'

const Login = ({ makeUser, loginUser }) => {
  return (
     <div className="logins">
        <div>
            <form method='POST' action='/login'>
                <input id='login-account-input'className="username" name="username" type="text" placeholder="username"></input>
                <input name="password" type="password"></input>
                <input className="button" type="submit" value="Log in" onClick={loginUser}></input>
            </form>
        </div>

        <div>
            <form method='POST' action='/signup'>
                <input id='create-account-input' name="username" type="text" placeholder="username"></input>
                <input name="password" type="password"></input>
                <input className="button" type="submit" value="Create Account" onClick={makeUser}></input>
            </form>
        </div>
    </div>
  )
}

export default Login
