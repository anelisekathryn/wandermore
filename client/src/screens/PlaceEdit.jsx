import '../assets/css/PlaceEdit.css';
import orangePin from '../assets/graphics/pin-orange.png'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import lists from '../utils/lists'
import countries from '../utils/countries'
import months from '../utils/months'
import years from '../utils/years'

export default function PlaceEdit({ places, handlePlaceUpdate }) {
  
  const [formData, setFormData] = useState({
    list: '',
    country: '',
    month: '',
    year: '',
  });
  const { id } = useParams()
  
  useEffect(() => {
    const fillFormData = () => {
      const placeItem = places.find((place) => place.id === Number(id));
      setFormData({
        list: placeItem.list,
        country: placeItem.country,
        month: placeItem.month,
        year: placeItem.year
      });
    };
    if (places.length) fillFormData();
  }, [places, id])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className='edit-place'>
      <div className='edit-place-container'>
        <form
        onSubmit={(e) => {
          e.preventDefault();
          handlePlaceUpdate(id, formData);
        }}
        >
          <img className='edit-pin' alt='orange pin' src={orangePin}></img>
          <h2>update this place</h2>
          <label>List:</label>
          <select name='list' onChange={handleChange} defaultValue='state'>
          <option disabled value='state'>
              {formData.list}
            </option>
            {lists.map((list) => (
              <option value={list.list} key={list.id} required>
              {list.list}
              </option>
            ))}
          </select>
          <br />
          <br />
          <label>Country:</label>
          <select name='country' onChange={handleChange} defaultValue='state'>
            <option disabled value='state'>
              {formData.country}
            </option>
            {countries.map((country) => (
              <option value={country.name} key={country.id} required>
              {country.name}
              </option>
            ))}
          </select>
          <br />
          <br />
          <label>Month:</label>
          <select name='month' onChange={handleChange} defaultValue='state'>
          <option disabled value='state'>
              {formData.month}
            </option>
            {months.map((month) => (
              <option value={month.month} key={month.id}>
              {month.month}
              </option>
            ))}
          </select>
          <br />
          <br />
          <label>Year:</label>
            <select name='year' onChange={handleChange} defaultValue='state'>
            <option disabled value='state'>
              {formData.year}
            </option>
              {years.map((year) => (
                <option value={year.year} key={year.id}>
                {year.year}
                </option>
              ))}
            </select>
          <br />
          <br />
        <button className='edit-button'>update</button>
        </form>
      </div>
    </div>
  )
}
