import { Link } from 'react-router-dom';
import Places from '../screens/Places';

export default function Footer({places, currentUser}) {
  return (
    <footer>
      <p>Site created by Anelise Kathryn</p>
      <p>See what else I'm working on: GitHub</p>
      {currentUser?.id === places.user_id ?
        <Link to='/signin'><button>sign in</button></Link>
        : <Link><button>logout</button></Link>
      }
    </footer>
  )
}
