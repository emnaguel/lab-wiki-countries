import React from 'react';
import countriesJSON from '../countries.json';
import { Link } from 'react-router-dom';

const CountryDetails = (props) => {
  const cca3 = props.match.params.cca3;

  const foundCountry = countriesJSON.find((country) => country.cca3 === cca3);

  return (
    <>
      <h1>{foundCountry.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{foundCountry.capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {foundCountry.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {foundCountry.borders.map((border) => {
                  const foundBorder = countriesJSON.find((country) => {
                    return country.cca3 === border;
                  });

                  return (
                    <li>
                      <Link to={`/${foundBorder.cca3}`}>
                        {foundBorder.name.common}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default CountryDetails;
