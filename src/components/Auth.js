import { useState } from 'react'
import { submitSignup, submitLogin } from '../redux/actionCreators'
import { connect } from 'react-redux'
import { useHistory } from "react-router-dom"

function Auth(props){

    const [signup, setSignup] = useState(false)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory()
    
    
    const toggleSignup = () => setSignup(!signup)
  
    const handleSubmit = (e) => {
      e.preventDefault() 
      signup ? props.submitSignup({ username, password }) : props.submitLogin({username, password})
      history.push("/services")
    }
    
    return<>
    {signup ? <h1>Sign Up!</h1> : <h1>Login!</h1>} 
    <form onSubmit={handleSubmit} >
      <label>
        Username:
        <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
        <input type="submit" value="Submit" />
    </form>
    <button onClick={toggleSignup}>Or...{signup ? "Login!" : "Signup!"}</button>
    </>
}

export default connect(null, {submitSignup, submitLogin})(Auth);