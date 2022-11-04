import { useState } from 'react';
// import { Luxon } from 'luxon';
// import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import DatePicker from './components/DatePicker';

export default function SearchBar({ apiUrl, setApiUrl }) {

    const [searchInput, setSearchInput] = useState({
        flyFrom: null,
        flyTo: null,
        dateFrom: null,
        dateTo: null
    })

    // const [fromDate, setFromDate] = useState();

    const handleFlyFrom = (e) => {
        setSearchInput({ ...searchInput, flyFrom: e.target.value });
        console.log(searchInput);
    }

    const handleFlyTo = (e) => {
        setSearchInput({ ...searchInput, flyTo: e.target.value });
        console.log(searchInput);
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

            {/* <DatePicker>
                label="Leave"
                value={fromDate}
                onChange={(newValue) => {
                    setFromDate(newValue);
                }}
            </DatePicker> */}

            <input type="datetime-local" name="timeFrom" value="DD/MM/YYYY" onchange={handleDateFrom}></input>

            <select name="to" onChange={handleFlyTo} >
                <option value="VLC">Valencia</option>
                <option value="BCN">Barcelona</option>
                <option value="MAD">Madrid</option>
                <option value="MXP">Milano</option>
                <option value="ATH">Athens</option>
            </select>

            {/* <DatePicker */}

            <input type="datetime-local" name="timeTo" value="DD/MM/YYYY" onchange={handleDateTo}></input>


            <input type="checkbox" name="direct"></input>
            <label htmlFor="direct">Direct</label>

            <button onClick={handleSearch}>Search</button>
        </div>
    )
}