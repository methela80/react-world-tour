import { useState } from 'react';
import './country.css'
import CountryDetails from '../CountryDetails/CountryDetails';


const Country = ({country, handleVisitedCountries,handleVisitedFlag}) => {
    console.log(country)

    const  {name, flags, population, area, cca3} = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () =>{

        setVisited(!visited)
    }
    
    
    

    return (
        <div className='country'>
            <h3>Name: {name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Code: {cca3}</p>
            <button onClick={() => handleVisitedCountries(country)}>Mark visited</button>
            <br />
            <button onClick={() => handleVisitedFlag(country.flags.png)}>Add flag</button>
            <br />
            <button onClick={handleVisited}>{visited? 'visited' : 'Going'}</button>
            {/* {visited && 'I have visited this country'} */}
            {
                visited? 'I have visited this country' : 'I want to visit'
            }
            <hr />
            <CountryDetails
            country={country}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlag={handleVisitedFlag}
            ></CountryDetails>
       </div>
    );
};

export default Country;