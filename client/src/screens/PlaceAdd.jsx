import { useState } from 'react';
import "react-datetime/css/react-datetime.css";
import countries from '../services/countries'
import years from '../services/years'

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
        <br />
        <br />
        <label>Country:</label>
        <select name='country' onChange={handleChange} defaultValue='default'>
          <option disabledvalue='default'>
            – select a country -
          </option>
          {countries.map((country) => (
            <option value={country.name} key={country.id}>
            {country.name}
            </option>
          ))}
        </select>
        <br />
        <br />
      
      <label>
        Month:  
          <input
            type='text'
            name='month'
            value={month}
            onChange={handleChange}
          />
        </label>

      <br />
      <br />
      
      <label>Year:</label>
        <select name='year' onChange={handleChange} defaultValue='default'>
          <option disabledvalue='default'>
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

        
      {/* <label>
        Year:
          <input
            type='text'
            name='year'
            value={year}
            onChange={handleChange}
          />
      </label> */}
      <button>add</button>
    </form>
    </div>
  )
}

// CITATION: countries JSON file from https://stefangabos.github.io/world_countries/



