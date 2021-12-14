import { useLocation } from 'react-router-dom';
import Footer from './Footer';

export default function Layout({ children, currentUser, places, handleSignOut }) {
  let location = useLocation();

  return (
    <div>
      {children}
      {location.pathname === '/about' || location.pathname === '/places' ?
        <Footer
          currentUser={currentUser}
          places={places}
          handleSignOut={handleSignOut}
        />
        : null
      }
    </div>
  )
}
