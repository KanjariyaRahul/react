import React, { useState, useEffect } from 'react'

import { Card } from "./Card";

export default function FetchData() {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([]);

    useEffect(() => {
        setFilter(data)
    }, [data])

    function clickHandler() {
        fetch('https://swapi.py4e.com/api/films').then((respose) => {
            return respose.json();
        }).then((data) => {
            setData(data.results);
        })
    }

    function filterData(title) {
        let dataFilter = data.filter((list) => {
            return list.title === title;
        })
        setFilter(dataFilter);
    }

    return (
       <>
       <div className=' mt-5 container'>
        <button className='px-5 py-1  mx-2 btn btn-success' onClick={clickHandler}>All</button> 
        <button className='px-5 py-1  mx-2 btn btn-success' onClick={() => filterData("A New Hope")}>filter Data</button>
        <div className="container mt-3">
            <Card data={filter}/>
        </div>
       </div>
       </>
        
    )
}