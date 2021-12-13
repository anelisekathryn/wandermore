import { Switch, Route, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getAllPlaces, getOnePlace, postPlace } from '../services/place';
import Home from '../screens/Home';
import Places from '../screens/Places';
import PlaceDetail from '../screens/PlaceDetail'
import PlaceAdd from '../screens/PlaceAdd';
import PlaceEdit from '../screens/PlaceEdit';


export default function MainContainer({currentUser}) {

  const [places, setPlaces] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchPlaces = async () => {
      const placeList = await getAllPlaces();
      setPlaces(placeList);
    };
    if (currentUser) fetchPlaces();
  }, [currentUser]);

  const handlePlaceCreate = async (formData) => {
    const newPlace = await postPlace(formData);
    setPlaces((prevState) => [...prevState, newPlace]);
    history.push('/places');
  };

  return (

    
    <div>
      <Switch>

      <Route path='/places/:id/edit'>
          <PlaceEdit places={places} />
        </Route>

      <Route path='/places/add'>
          <PlaceAdd
            handlePlaceCreate={handlePlaceCreate}
          />
        </Route>

        <Route path='/places/:id'>
          <PlaceDetail places={places} currentUser={currentUser} />
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
