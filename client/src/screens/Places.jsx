import '../assets/css/Places.css';
import orangePin from '../assets/graphics/pin-orange.png'
import mauvePin from '../assets/graphics/pin-mauve.png'
import bluePin from '../assets/graphics/pin-blue.png'
import { Link } from 'react-router-dom';

export default function Places({ places, currentUser }) {
  
  const placesTraveled = places.filter(place => place.list === 'Traveled To')
  const placesUpcoming = places.filter(place => place.list === 'Upcoming Adventures')
  const placesOnList = places.filter(place => place.list === 'On The List')
  // function countryCount(a) {
  //   var newArr = [];
  //     for (var i = 0; i < a.length; i++) {
  //       if (newArr.indexOf(a[i]) === -1) {
  //           newArr.push(a[i]);
  //       }
  //     }
  //   return newArr;
  // }
  // console.log(countryCount(placesTraveled))

  return (
    <div>
      <img className='world-map' alt='world map' src='https://i.imgur.com/uatCxal.png'></img>
      <div className='places-header'>
        <div className='country-count'>
          <div className='country-count-text'>
            <img className='count-pin' alt='orange pin' src={orangePin}></img>
            <h5>country count</h5>
            <h3>{placesTraveled.length}</h3>
          </div>
        </div>
        <div className='profile-bar'></div>
        <img className='profile-img' src={currentUser?.profile_image_url} alt='user profile'></img>
        <h2>{currentUser?.username}</h2>
      </div>
      <div className='places-container'>
        <div className='places-traveled'>
          <h3>PLACES I'VE TRAVELED TO</h3>
          {placesTraveled.map((place) => (
            <div key={place.id} className='places-map'>
              <img alt='orange pin' src={orangePin}></img>
              <Link to={`/places/${place.id}`}>
                <p>{place.country} | {place.month} {place.year}</p>
              </Link>
            </div>
          ))}
        </div>
        <div className='places-right-container'>
          <div className='places-upcoming'>
            <h3>UPCOMING ADVENTURES</h3>
            {placesUpcoming.map((place) => (
              <div key={place.id} className='places-map'>
                <img alt='mauve pin' src={mauvePin}></img>
                <Link to={`/places/${place.id}`}>
                  <p>{place.country} | {place.month} {place.year}</p>
                </Link>
              </div>
            ))}
          </div>
          <div className='places-list'>
            <h3>ON THE LIST</h3>
            {placesOnList.map((place) => (
              <div key={place.id} className='places-map'>
                <img alt='blue pin' src={bluePin}></img>
                <Link to={`/places/${place.id}`}>
                  <p>{place.country}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Link to ='/places/add'>
        <button className='add-place-button'>add a place</button>
      </Link>
    </div>
  )
}
