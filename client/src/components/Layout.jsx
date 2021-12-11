import { Link } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      <footer>
          <div>
            <p>Site created by Anelise Kathryn</p>
            <p>See what else I'm working on: Github</p>
            <Link to='/signin'>sign in</Link>
          </div>
      </footer>
    </div>
  )
}
