import {Link} from 'react-router-dom'

export default function About() {
  return (
    <div>
      <h1>"I haven't been everywhere, but it's on my list."</h1>
      <h3>wandermore logo here</h3>
      <h2>restless wanderer at heart? welcome home.</h2>
      <h4>pin icon here</h4>
      <p>Wandermore is where the travelers of the world come together to share their experiences and their running tab of world travels. Find inspiration and a place to rest your wandering heart with like minded souls. Track all the beautiful countries of the world you have visited, share your upcoming adventures, and put that travel wish list in writing. It is said that the world is a book, and those who do not travel read only one page. We believe your travel story should be a library of novels filled with adventure, new experiences, heart-stopping moments and unforgettable journeys. We hope you continue wandering forevermore, keeping us along for the ride.</p>
      <Link to='/signup'>
        <button>get started</button>
      </Link>
    </div>
  )
}
