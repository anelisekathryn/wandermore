import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='home'>
      <h1>wandermore</h1>
      <Link to='/signin'>sign in</Link>
      <br />
      <Link to='/signup'>sign up</Link>
    </div>
  )
}
