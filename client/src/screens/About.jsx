import '../assets/css/About.css';
import bluePin from '../assets/graphics/pin-blue.png'
import logo from '../assets/graphics/wandermore-logo-white.png'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className='about'>
      <div className='about-hero'>
        <div className='about-hero-content'>
          <h1>"I haven't been everywhere, but it's on my list."</h1>
          <img src={logo} alt='wandermore logo'></img>
        </div>
      </div>
      <div className='about-content'>
        <h2>restless wanderer at heart? welcome home.</h2>
        <img className='about-pin' alt='blue pin' src={bluePin}></img>
        <p>Wandermore is where the travelers of the world come together to share their experiences and their running tab of world travels. Find inspiration and a place to rest your wandering heart with like minded souls. Track all the beautiful countries of the world you have visited, share your upcoming adventures, and put that travel wish list in writing. It is said that the world is a book, and those who do not travel read only one page. We believe your travel story should be a library of novels filled with adventure, new experiences, heart-stopping moments and unforgettable journeys. We hope you continue wandering forevermore, keeping us along for the ride.</p>
        <Link to='/signup'>
          <button className='get-started-button'>get started</button>
        </Link>
      </div>    
    </div>
  )
}
