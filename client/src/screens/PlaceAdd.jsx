import { useState } from 'react';

export default function PlaceAdd({handlePlaceCreate}) {

  const [formData, setFormData] = useState({
    list: '',
    country: '',
    month: '',
    year: '',
  });
  const { list, country, month, year } = formData;

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
        handlePlaceCreate(formData);
      }}
      >
      <h3>add a new place to your list</h3>
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
      <button>add</button>
    </form>
    </div>
  )
}




