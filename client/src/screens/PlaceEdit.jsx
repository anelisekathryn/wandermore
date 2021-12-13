import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function PlaceEdit({ places, handlePlaceUpdate }) {
  
  const [formData, setFormData] = useState({
    list: '',
    country: '',
    month: '',
    year: '',
  });
  const { list, country, month, year } = formData;
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
    <div>
      <form
      onSubmit={(e) => {
        e.preventDefault();
        handlePlaceUpdate(id, formData);
      }}
      >
      <h3>edit</h3>
      <label>
        List:
          <input
            type='text'
            name='list'
            value={list}
            onChange={handleChange}
            required
          />
      </label>
      <label>
        Country:
          <input
            type='text'
            name='country'
            value={country}
            onChange={handleChange}
            required
          />
      </label>
      <label>
        Month:  
          <input
            type='text'
            name='month'
            value={month}
            onChange={handleChange}
          />
      </label>
      <label>
        Year:
          <input
            type='text'
            name='year'
            value={year}
            onChange={handleChange}
          />
      </label>
      <button>update</button>
      </form>
    </div>
  )
}
