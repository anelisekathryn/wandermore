import '../assets/css/SignIn.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SignIn(props) {

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const { username, password } = formData;
  const { handleSignIn } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }

  return (
    <div className='sign-in'>
      <div className='sign-in-container'>
        <form onSubmit={(e) => {
          e.preventDefault()
          handleSignIn(formData)
        }}>
          <h2>welcome back, globetrotter</h2>
          <label>
            username:
            <input
              type='text'
              name='username'
              value={username}
              onChange={handleChange}
            />
          </label>
          <br />
          <br />
          <label>
            password:
            <input
              type='password'
              name='password'
              value={password}
              onChange={handleChange}
            />
          </label>
          <br />
          <br />
          <button className='lets-go-button'>let's go</button>
        </form>
        <p>not a member yet? sign up <Link className='sign-up-here' to='/signup'>here</Link>!</p>
      </div>
    </div>
  )
}
