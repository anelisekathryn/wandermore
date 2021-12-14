import {Link} from 'react-router-dom'

export default function About() {
  return (
    <div>
      <h1>"I haven't been everywhere, but it's on my list."</h1>
      <h3>wandermore logo here</h3>
      <h2>restless wanderer at heart? welcome home.</h2>
      <h4>pin icon here</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <Link to='/signup'>
        <button>get started</button>
      </Link>
    </div>
  )
}
