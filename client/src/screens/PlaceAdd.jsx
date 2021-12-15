import '../assets/css/PlaceAdd.css';
import orangePin from '../assets/graphics/pin-orange.png'
import { useState } from 'react';
import "react-datetime/css/react-datetime.css";
import lists from '../utils/lists'
import countries from '../utils/countries'
import months from '../utils/months'
import years from '../utils/years'

export default function PlaceAdd({handlePlaceCreate}) {

  const [formData, setFormData] = useState({
    list: '',
    country: '',
    month: '',
    year: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className='add-place'>
      <div className='add-place-container'>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handlePlaceCreate(formData);
          }}
        >
          <img className='add-pin' alt='orange pin' src={orangePin}></img>
          <h2>add a new place to your list</h2>
          <label>List:</label>
          <select name='list' onChange={handleChange} required>
            <option disabled value='' selected>
              – select a list -
            </option>
            {lists.map((list) => (
              <option value={list.list} key={list.id} >
              {list.list}
              </option>
            ))}
          </select>
          <br />
          <br />
          <label>Country:</label>
          <select name='country' onChange={handleChange} required>
            <option disabled value='' selected>
              – select a country -
            </option>
            {countries.map((country) => (
              <option value={country.name} key={country.id} >
              {country.name}
              </option>
            ))}
          </select>
          <br />
          <br />
          <label>Month:</label>
          <select name='month' onChange={handleChange} defaultValue='default'>
            <option disabled value='default'>
              – select a month -
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
            <select name='year' onChange={handleChange} defaultValue='default'>
              <option disabled value='default'>
                – select a year -
              </option>
              {years.map((year) => (
                <option value={year.year} key={year.id}>
                {year.year}
                </option>
              ))}
            </select>
          <br />
          <br />
          <button className='add-button'>add</button>
        </form>
      </div>
    </div>
  )
}

// CITATION: countries JSON file from https://stefangabos.github.io/world_countries/



