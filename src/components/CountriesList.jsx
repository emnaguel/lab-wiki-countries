import React, { Component } from 'react'
import countries from '../countries.json'
import { Link } from 'react-router-dom';

const CountriesList = (props) => {
    return (
      <div className="list-group">
        {props.countries.map((country) => {
          return (
            <Link
              key={country.cca3}
              className="list-group-item list-group-item-action"
              to={`/${country.cca3}`}
            >
              {country.flag} {country.name.common}
            </Link>
          );
        })}
      </div>
    );
  };
  
  export default CountriesList;
