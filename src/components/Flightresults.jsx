import React from 'react';
import Flight from './Flightcard';
export default function ({ flightData, isLoading }) {
    if (flightData === null && isLoading === false)
        return (<p> Come fly with me? </p>)
    if (flightData === null) {
        return <p>Loading...</p>
    } else if (flightData.data.length === 0) {
        return <p> on yer bike mate</p>
    }
    return (
        <div className="flight-results">
            {

                flightData.data.map(flight => {
                    return <Flight
                        key={flight.id}
                        flight={flight}
                        //comes from search
                        dateFrom={flight.dateFrom}
                        //comes from search
                        dateTo={flight.dateTo}
                    />
                })
            }

        </div >
    )

}