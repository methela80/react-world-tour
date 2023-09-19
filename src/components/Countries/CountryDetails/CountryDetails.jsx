import CountryData from "../CountryData/CountryData";

const CountryDetails = ({country, handleVisitedCountries, handleVisitedFlag}) => {
    return (
        <div>
            <h3>Country Details</h3>
            <hr />
            <CountryData
            country={country}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlag={handleVisitedFlag}
            ></CountryData>
            
        </div>
    );
};

export default CountryDetails;
