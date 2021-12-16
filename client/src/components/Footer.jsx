import '../assets/css/Footer.css';
import { Link } from 'react-router-dom';

export default function Footer({places, currentUser, handleSignOut}) {
  return (
    <footer>
      <div className='footer-left'>
        <p>Site created by Anelise Kathryn</p>
        <p>See what else I'm working on: GitHub</p>
        <p>About Wandermore</p>
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
