import React from 'react';
import Flight from './Flightcard';
import PageCounter from './PageCounter';

export default function ({ flightData, isLoading, counterNr, setNrOnCounter, isDirect }) {
  if (flightData === null && isLoading === false)
    return (<p> Come fly with me? </p>)
  if (flightData === null) {
    return <p>Loading...</p>
  } else if (flightData.data.length === 0) {
    return <p> on yer bike mate</p>
  }

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

        filterFlightData.map(flight => {
          return <Flight
            key={flight.id}
            flight={flight}
            //comes from search
            dateFrom={flight.dateFrom}
            //comes from search
            dateTo={flight.dateTo}
            isDirect={isDirect}
          />
        })
      }

    </div >
  )

}