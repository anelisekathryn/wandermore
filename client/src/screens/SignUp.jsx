import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SignUp(props) {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    profile_image_url: ''
  });
  const { username, email, password, profile_image_url } = formData;
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
        <p>Wandermore is where the travelers of the world come together to share their experiences. Find inspiration and a place to rest your wandering heart with like minded souls. Track all the beautiful countries of the world you have visited and share your upcoming adventures all right here.</p>
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
        <label>
          profile image:
          <input
            type='text'
            name='image'
            value={profile_image_url}
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
