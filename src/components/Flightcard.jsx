import { DateTime } from 'luxon';
import Connection from './Connection';

export default function Flight({ flight, isDirect, searchInput }) {

    const timeFrom = DateTime.fromMillis(flight.dTime * 1000).toFormat('hh:mm')
    const timeTo = DateTime.fromMillis(flight.aTime * 1000).toFormat('hh:mm')

    const dateFrom = DateTime.now(searchInput.dateFrom).toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' })
    const dateTo = DateTime.now(searchInput.dateTo).toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' })

    const directCheck = () => {
        if (isDirect === false) {
            return (
                <>
                    <h2>{flight.cityFrom}({flight.flyFrom}) - {flight.cityTo}({flight.flyTo})</h2>
                    <h3>{dateFrom} - {dateTo}</h3>
                    <h4>{timeFrom} - {timeTo}</h4>
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
                </>)
        } else if (isDirect === true && flight.route.length == 1) {
            return (
                <>
                    <h2>{flight.cityFrom}({flight.flyFrom}) -{flight.cityTo}({flight.flyTo})</h2>
                    <h3>{dateFrom} - {dateTo}</h3>
                    <h4>{timeFrom} - {timeTo}</h4>
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
                </>)
        } else {
            return (
                <></>
            )
        }
    }


    return (
        <div className='flight-result'>
            {directCheck()}
        </div>
    )
}