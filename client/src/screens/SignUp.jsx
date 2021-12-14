import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SignUp(props) {

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const { username, email, password } = formData;
  const { handleSignUp } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }

  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault()
        handleSignUp(formData)
      }}>
        <h2>ready to wander more?</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <Link to='/about'>
        <button>learn more</button>
        </Link>
        <br />
        <br />
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
          email:
          <input
            type='text'
            name='email'
            value={email}
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
        <button>let's go</button>
      </form>
    </div>
  )
}
