import { DateTime } from 'luxon';
import Connection from './Connection';

export default function Flight({ flight, dateFrom, dateTo }) {

    const timeFrom = DateTime.fromMillis(flight.dTime * 1000).toFormat('hh:mm')
    const timeTo = DateTime.fromMillis(flight.aTime * 1000).toFormat('hh:mm')


    return (
        <div className='flight-result'>
            <h2>{flight.cityFrom}({flight.flyFrom})-{flight.cityTo}({flight.flyTo})</h2>
            <h3>{dateFrom}-{dateTo}</h3>
            <h4>{timeFrom}-{timeTo}</h4>
            <h4>Connecting flights: </h4>
            <div className="connections">
                {
                    flight.route.map(connection => {
                        return <Connection
                            key={connection.id}
                            connection={connection}
                        />
                    })
                }
            </div>
            <h4>{flight.price}€</h4>


        </div>
    )
}