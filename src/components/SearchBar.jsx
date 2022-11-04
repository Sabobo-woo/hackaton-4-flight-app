import { dateTime } from 'luxon';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import { useState } from 'react';

export default function SearchBar() {

    const fromDestination = '';
    const toDestination = '';

    const handleFrom = () => {
        setFrom(fromDestination)
    }

    return (
        <div className="searchbar">
            <select name="from">
                <option value="prague">Prague</option>
                <option value="berlin">Berlin</option>
                <option value="warsaw">Warsaw</option>
                <option value="pardubice">Pardubice</option>
            </select>
            <DatePicker
        </div>
    )
}