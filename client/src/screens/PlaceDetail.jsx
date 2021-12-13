import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getOnePlace } from '../services/place';

export default function PlaceDetail({ places }) {
  
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
    <div>
      <h2>place detail here</h2>
      <h3>{place?.country} | {place?.month} {place?.year}</h3>
      <Link to ={`/places/${id}/edit`}>
        <button>edit</button>
      </Link>
      <Link>
        <button>delete</button>
      </Link>
    </div>
  )
}
