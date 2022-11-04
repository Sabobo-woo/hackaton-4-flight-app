import { useEffect, useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Flightresults from './components/Flightresults';
import PageCounter from './components/PageCounter';





const App = () => {
  const [flightData, setFlightData] = useState(null);
  const [counterNr, setNrOnCounter] = useState(1);
  const [apiUrl, setApiUrl] = useState(null);

  //+++++++++++++++Bri&Bina's commented junk+++++++++++++++
  const [isLoading, setIsLoading] = useState(false);
  // const dateFrom = '11/11/2022';
  // const dateTo = '20/11/2022';
  //+++++++++++++++Bri&Bina's commented junk+++++++++++++++



  // // for setting and holding whatever we search for
  // const [searchQuery, setSearchQuery] = useState("");
  // // I assume for setting and holding whatever we get back
  // const [searchResult, setSearchResult] = useState("");
  // // fuck if I know. A boolean that doesn't make sense.
  // // apparently just a think for a "wait for this" message
  // // to the user 

  const getApiUrl = () => apiUrl;

  // tells the code what you want it to react to?? using the 
  // array at the bottom that you sort of understand
  useEffect(() => {
    // gets the shit from the API and for some reason we put it
    // in the useEffect, which we've never done before
    const loadData = async () => {
      // fucking why though?

      //+++++++++++++++Bri&Bina's commented junk+++++++++++++++
      setIsLoading(true);
      // console.log(dateFrom)
      //+++++++++++++++Bri&Bina's commented junk+++++++++++++++

      // the usual except it calls that function that builds the url
      // with our search data
      const url = getApiUrl();
      const res = await fetch(url);
      const data = await res.json();

      // this appears to be pulling the search data from some kind 
      // of magic that generated it
      setFlightData(data);

      //+++++++++++++++Bri&Bina's commented junk+++++++++++++++
      // console.log(data);
      setIsLoading(false);
      //+++++++++++++++Bri&Bina's commented junk+++++++++++++++
    };
    if (apiUrl !== null) {
      loadData();
    }
    // only loads data if something has been searched (need searchQuery in [] below)
    // if (searchQuery) {
    //   loadData();
    // }
  }, [apiUrl]);


  const filterFlightData =
    flightData === null
      ? []
      : flightData.data.filter((flight, i) => i >= ((counterNr - 1) * 10) && i < ((counterNr * 10)));

  return (
    <div className="flight-results">

      <SearchBar apiUrl={apiUrl} setApiUrl={setApiUrl} />
      <Flightresults flightData={flightData} isLoading={isLoading} />

      <PageCounter
        counterNr={counterNr}
        setNrOnCounter={setNrOnCounter}
      />

    </div>
  );
};

export default App;
