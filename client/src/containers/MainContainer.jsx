import { Switch, Route, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getAllPlaces, postPlace } from '../services/place';
import Home from '../screens/Home';
import Places from '../screens/Places';
import PlaceAdd from '../screens/PlaceAdd';


export default function MainContainer({currentUser}) {

  const [places, setPlaces] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchPlaces = async () => {
      const placeList = await getAllPlaces();
      setPlaces(placeList);
    };
    fetchPlaces();
  }, []);

  const handlePlaceCreate = async (formData) => {
    const newPlace = await postPlace(formData);
    setPlaces((prevState) => [...prevState, newPlace]);
    history.push('/places');
  };

  return (

    
    <div>
      <Switch>

      <Route path='/places/add'>
          <PlaceAdd
            handlePlaceCreate={handlePlaceCreate}
          />
        </Route>

      <Route path='/places'>
          <Places
            places={places}
            currentUser={currentUser}
          />
        </Route>

        <Route path='/'>
          <Home />
        </Route>

      </Switch>
    </div>
  )
}
