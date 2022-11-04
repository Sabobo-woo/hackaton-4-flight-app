import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import './App.css';
import Flight from './components/Flightcard';
import PageCounter from './components/PageCounter';


const getApiUrl = (flyFrom, flyTo, dateFrom, dateTo, resultLimit) =>
  `https://api.skypicker.com/flights?fly_from=${flyFrom}&fly_to=${flyTo}&date_from=${dateFrom}&date_to=${dateTo}&limit=${resultLimit}&partner=data4youcbp202106`;

const App = () => {
  const [flightData, setFlightData] = useState(null);
  const [counterNr, setNrOnCounter] = useState(1);

  const dateFrom = '11/11/2022';
  const dateTo = '20/11/2022';
  // // for setting and holding whatever we search for
  // const [searchQuery, setSearchQuery] = useState("");
  // // I assume for setting and holding whatever we get back
  // const [searchResult, setSearchResult] = useState("");
  // // fuck if I know. A boolean that doesn't make sense.
  // // apparently just a think for a "wait for this" message
  // // to the user 
  const [isLoading, setIsLoading] = useState(false);

  // tells the code what you want it to react to?? using the 
  // array at the bottom that you sort of understand
  useEffect(() => {
    // gets the shit from the API and for some reason we put it
    // in the useEffect, which we've never done before
    const loadData = async () => {
      // fucking why though?
      setIsLoading(true);

      // the usual except it calls that function that builds the url
      // with our search data
      console.log(dateFrom)
      const url = getApiUrl('PRG', 'VLC', dateFrom, dateTo, 100);
      const res = await fetch(url);
      const data = await res.json();

      // this appears to be pulling the search data from some kind 
      // of magic that generated it
      setFlightData(data);
      console.log(data);

      setIsLoading(false);
    };

    loadData();

    // only loads data if something has been searched (need searchQuery in [] below)
    // if (searchQuery) {
    //   loadData();
    // }
  }, []);


  const filterFlightData =
    flightData === null
      ? []
      : flightData.data.filter((flight, i) => i >= ((counterNr - 1) * 10) && i < ((counterNr * 10)));

  return (
    <div className="flight-results">

      <PageCounter
        counterNr={counterNr}
        setNrOnCounter={setNrOnCounter}
      />

      {
        flightData === null
          ? <div>Loading...</div>
          : filterFlightData.map(flight => {
            return <Flight
              key={flight.id}
              flight={flight}
              //comes from search
              dateFrom={dateFrom}
              //comes from search
              dateTo={dateTo}
            />
          })
      }

    </div>
  );
};

export default App;
