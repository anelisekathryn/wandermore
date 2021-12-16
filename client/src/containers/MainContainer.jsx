import { Switch, Route, useHistory, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getAllPlaces, postPlace, putPlace, deletePlace } from '../services/place';
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

  const handlePlaceUpdate = async (id, formData) => {
    const newPlace = await putPlace(id, formData);
    setPlaces((prevState) =>
      prevState.map((place) => {
        return place.id === Number(id) ? newPlace : place;
      })
    );
    history.push('/places');
  };

  const handlePlaceDelete = async (id) => {
    await deletePlace(id);
    setPlaces((prevState) => prevState.filter((place) => place.id !== Number(id)));
    history.push('/places');
  };

  return (
    <div>
      <Switch>
      <Route path='/places/:id/edit'>
          <PlaceEdit places={places} handlePlaceUpdate={handlePlaceUpdate} />
        </Route>
      <Route path='/places/add'>
          <PlaceAdd
            handlePlaceCreate={handlePlaceCreate}
          />
        </Route>
        <Route path='/places/:id'>
          <PlaceDetail
            currentUser={currentUser}
            handlePlaceDelete={handlePlaceDelete}
          />
        </Route>
        <Route path='/places'>
          {currentUser?.id && (currentUser ?
            <Places
            places={places}
            currentUser={currentUser}
            />
            : <Redirect to='/signin' />
          )}
        </Route>
        <Route path='/'>
          {!currentUser ?
            <Home
            places={places}
            currentUser={currentUser}
            />
            : <Redirect to='/places' />
          }
        </Route>
      </Switch>
    </div>
  )
}
