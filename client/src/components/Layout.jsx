import { Link } from 'react-router-dom';

export default function Layout({ children }) {
  return (
    <div>
      {/* <footer>
        <div>
            <h3>footer text</h3>
            <p>Site created by Anelise Kathryn</p>
            <p>See what else I'm working on: Github</p>
            <Link to='/signin'>sign in</Link>
          </div>
      </footer> */}
      {children}
    </div>
  )
}
