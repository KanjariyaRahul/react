import React, { useEffect, useState } from 'react';

export default function FetchData() {
    const [data, setMyData] = useState([]);
    const [error, setError] = useState(null);
    const [fetchTrigger, setFetchTrigger] = useState(false); 
    const [color, setColor] = useState("black")

    useEffect(() => {
        
        setColor(color === "green" ? "pink" : "green");
        if (fetchTrigger) {
            async function fetchData() {
                try {
                    const response = await fetch('https://swapi.py4e.com/api/films');
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const list = await response.json();
                    setMyData(list.results);
                } catch (error) {
                    setError(error.message);
                }

                // fetch('https://swapi.py4e.com/api/films').then((respose) => {
                // return respose.json();
                // }).then((list) => {
                //     setMyData(list.results);
                // }).catch((error) => {
                //     alert(error)
                // })
            }

            fetchData(); 
        }
    }, [fetchTrigger]); 

    const handleFetchData = () => {
        setFetchTrigger(true); 
    };

    return (
        <div className='container mt-3 ' style={{ backgroundColor: `${color}`, padding: "20px" }}>
            {data.map((list) => (
                <div >
                    <h2>{list.title}</h2>
                    <p>{list.director}</p>
                </div>
            ))}
            {error && <p>Error: {error}</p>}
            <button onClick={handleFetchData} className='btn btn-success'>Fetch Api</button>
        </div>
    );
}
