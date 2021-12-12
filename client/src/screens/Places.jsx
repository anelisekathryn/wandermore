import { Link } from 'react-router-dom';

export default function Places({places, currentUser}) {
  return (
    <div>
      <h2>{currentUser?.username}</h2>
      <p>places will be here</p>
      {places.map((place) => (
        <div key={place.id}>
          {/* <Link to={`/places/${place.id}`}> */}
            <p>{place.list}</p>
            <p>{place.country} | {place.month} {place.year}</p>
          {/* </Link> */}
        </div>
      ))}
      <Link to ='/places/add'>
        <button>add a place</button>
      </Link>
    </div>
  )
}
