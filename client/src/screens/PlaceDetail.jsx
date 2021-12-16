import '../assets/css/PlaceDetail.css';
import orangePin from '../assets/graphics/pin-orange.png'
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getOnePlace } from '../services/place';

export default function PlaceDetail({ handlePlaceDelete }) {
  
  const [place, setPlace] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchPlace = async () => {
      const placeItem = await getOnePlace(id);
      setPlace(placeItem);
    };
    fetchPlace();
  }, [id]);

  return (
    <div className='place-detail'>
      <div className='detail-title'>
        <img className='detail-pin' alt='orange pin' src={orangePin}></img>
        <h2>{place?.country}</h2>
      </div>
      <h3>{place?.month} {place?.year}</h3>
      <Link to ={`/places/${id}/edit`}>
        <button className='detail-button'>edit</button>
      </Link>
      <button className='detail-button' onClick={() => handlePlaceDelete(id)}>delete</button>
    </div>
  )
}
