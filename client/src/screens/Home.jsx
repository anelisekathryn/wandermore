import '../assets/css/Home.css';
import logo from '../assets/graphics/wandermore-logo-white.png'
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='home'>
      <div className='home-content'>
        <img alt='wandermore logo' src={logo}></img>
        <br />
        <div className='home-links'>
          <Link to='/signin'>sign in</Link>
          <br />
          <Link to='/signup'>sign up</Link>
        </div>
      </div>
    </div>
  )
}
