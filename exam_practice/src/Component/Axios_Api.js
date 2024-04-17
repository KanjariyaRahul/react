import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function FetchData() {
    const [data, setMyData] = useState([]);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: 'https://meteostat.p.rapidapi.com/stations/hourly',
        params: {
          station: '10637',
          start: '2023-02-01',
          end: '2023-02-01',
          tz: 'Europe/Berlin'
        },
        headers: {
          'X-RapidAPI-Key': '165e4b751fmshe768d6e2aa1ad9ap197c0bjsn4c18dc77482b',
          'X-RapidAPI-Host': 'meteostat.p.rapidapi.com'
        }
      };
    useEffect(() => {
        console.log("useEffect call");
    }, [data])

    async function fetchData() {
        try {
            const response = await axios.request(options);
            console.log(response.data);
            setMyData(response.data.data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
        {data.map((list) => {
            return <>
                <h2>{list.wspd}</h2>
                <p>{list.wspd}</p>
            </>
        })}
            {error && <p>Error: {error}</p>}
            <button onClick={fetchData} className='btn btn-gereen'>Fetch Data</button>
        </div>
    )
}
