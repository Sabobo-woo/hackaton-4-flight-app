import { useState } from 'react';

export default function SearchBar({ apiUrl, setApiUrl }) {

    const [searchInput, setSearchInput] = useState({
        flyFrom: null,
        flyTo: null,
        dateFrom: null,
        dateTo: null
    })

    const handleFlyFrom = (e) => {
        setSearchInput({ ...searchInput, flyFrom: e.target.value });
    }

    const handleFlyTo = (e) => {
        setSearchInput({ ...searchInput, flyTo: e.target.value });
    }

    const handleDateFrom = (e) => {
        setSearchInput({ ...searchInput, dateFrom: e.target.value })
    }

    const handleDateTo = (e) => {
        setSearchInput({ ...searchInput, dateTo: e.target.value })
    }

    const handleSearch = () => {
        setApiUrl(`https://api.skypicker.com/flights?fly_from=${searchInput.flyFrom}&fly_to=${searchInput.flyTo}&date_from=${searchInput.dateFrom}&date_to=${searchInput.dateTo}&limit=5&partner=data4youcbp202106`)
    }

    return (
        <div className="searchbar">
            {console.log(searchInput)}
            {console.log(apiUrl)}
            <select name="from" onChange={handleFlyFrom}>
                <option value="PRG">Prague</option>
                <option value="BER">Berlin</option>
                <option value="WAW">Warsaw</option>
                <option value="PED">Pardubice</option>
            </select>

            <input type="date" name="timeFrom" onChange={handleDateFrom}></input>

            <select name="to" onChange={handleFlyTo} >
                <option value="VLC">Valencia</option>
                <option value="BCN">Barcelona</option>
                <option value="MAD">Madrid</option>
                <option value="MXP">Milano</option>
                <option value="ATH">Athens</option>
            </select>

            <input type="date" name="timeTo" onChange={handleDateTo}></input>

            <input type="checkbox" name="direct"></input>
            <label htmlFor="direct">Direct</label>

            <button onClick={handleSearch}>Search</button>
        </div>
    )
}