import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import styles from './CountryPicker.module.css';

import { fetchCountries } from '../../services/api';

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchCountries] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setFetchCountries(await fetchCountries());
    }

    fetchApi();
  },[setFetchCountries]);

  console.log(fetchedCountries);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue="" onChange={e => handleCountryChange(e.target.value)} >
        <option value="">Global</option>
        {fetchedCountries.map((country, index) => <option key={index} value={country} >{country}</option>)}
      </NativeSelect>
    </FormControl>
  )
};

export default CountryPicker;