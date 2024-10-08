import React,{useState} from 'react'
import '/src/styles/register.css'


const Register = ({showLoginHandler}) => {
const [username, setUsername] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');



const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('http://localhost:4000/vendor/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        email,
        password
      })
    });

    const data = await response.json();
    if (response.ok) {
      console.log(data);
      setUsername('');
      setEmail('');
      setPassword('');
      showLoginHandler();
      alert("Registration successful");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Registration failed");
  }
}


  return (
    <div className='registersection'>
        <form className='authform' onSubmit={handleSubmit}>
        <h3>register</h3>
            <label>username</label><br/>
            <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Enter username'/><br/>
            <label>Email </label><br/>
            <input type="text" name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter email'/><br/>
            <label>Password </label><br/>
            <input type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter password'/><br/>
            <div className="btnsubmit">
                <button type='submit'>submit</button>
            </div>
        </form>
    </div>
  )
}

export default Register
