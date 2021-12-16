import '../assets/css/Footer.css';
import { Link } from 'react-router-dom';

export default function Footer({places, currentUser, handleSignOut}) {
  return (
    <footer>
      <div className='footer-left'>
        <p>Site created by <a href="https://www.linkedin.com/in/anelisebergin/" target="_blank" rel="noreferrer">Anelise Kathryn</a></p>
        <p>See what else I'm working on: <a href="https://github.com/anelisekathryn" target="_blank" rel="noreferrer">GitHub</a></p>
        <p><a href='/about'>About Wandermore</a></p>
      </div>
      <div className='footer-right'>
        {currentUser?.id === places.user_id ?
          <Link to='/signin'><button>sign in</button></Link>
          : <Link><button onClick={handleSignOut}>sign out</button></Link>
        }
      </div>
    </footer>
  )
}
