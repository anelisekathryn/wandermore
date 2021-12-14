import { useState } from 'react';
import "react-datetime/css/react-datetime.css";
import lists from '../services/lists'
import countries from '../services/countries'
import months from '../services/months'
import years from '../services/years'

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
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handlePlaceCreate(formData);
        }}
        >
        <h3>add a new place to your list</h3>
        <label>List:</label>
        <select name='list' onChange={handleChange} defaultValue='default' >
          <option disabledvalue='default'>
            – select a list -
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
        <select name='country' onChange={handleChange} defaultValue='default' >
          <option disabledvalue='default'>
            – select a country -
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
        <select name='month' onChange={handleChange} defaultValue='default'>
          <option disabledvalue='default'>
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
        <button>add</button>
      </form>
    </div>
  )
}

// CITATION: countries JSON file from https://stefangabos.github.io/world_countries/



