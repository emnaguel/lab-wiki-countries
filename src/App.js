
import './App.css';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import countriesJSON from './countries.json';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <div
     

          >
            <CountriesList countries={countriesJSON} />
          </div>
          <div>
            <Route exact path="/:cca3" component={CountryDetails} />
          </div>
    </div>
  );
}

export default App;
