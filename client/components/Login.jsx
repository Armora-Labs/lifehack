import React from 'react'

const Login = () => {
  return (
    <div className="logins">
        <div>
            <form method='POST' action='/login'>
                <input className="username" name="username" type="text" placeholder="username"></input>
                <input name="password" type="password"></input>
                <input className="button" type="submit" value="Log in"></input>
            </form>
        </div>

        <div>
            <form method='POST' action='/signup'>
                <input name="username" type="text" placeholder="username"></input>
                <input name="password" type="password"></input>
                <input className="button" type="submit" value="Create Account"></input>
            </form>
        </div>
    </div>
    // <mainContainer />
  )
}

export default Login
