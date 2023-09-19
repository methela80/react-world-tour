import { useEffect } from "react";
import { useState } from "react";
import Country from "./country/Country";
import './countries.css'


const Countries = () => {

    const [countries, setCountries] = useState([]);

    const [visitedCountries, setVisitedCountries] = useState([])

    const [visitedFlag, setVisitedFlag] = useState([])

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])

    const handleVisitedCountries = country =>{

        console.log('Add this to your visited country');
        const newVisitedCountry = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountry)
    }

    const handleVisitedFlag = flag =>{
        const newVisitedFlag = [...visitedFlag, flag]
        setVisitedFlag(newVisitedFlag)

    }

    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            {/* visited country list */}
            <div className="visited">
                <h5>Visited Countries : {visitedCountries.length}</h5>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="flag-container">
                {
                   visitedFlag.map((flag, idx) => <img key={idx} src={flag}></img>)
                }
            </div>
            {/* display country */}
            <div className="country-container">
            {
                countries.map(country => <Country key={country.cca3}
                    handleVisitedCountries={handleVisitedCountries}
                    handleVisitedFlag={handleVisitedFlag}
                     country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;