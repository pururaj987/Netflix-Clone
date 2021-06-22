import React, { useEffect, useState } from 'react'
import "./Banner.css";
import axios from "./axios"
import requests from "./Requests";
import { https } from 'follow-redirects';

function Banner() {

    const [movie , setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[Math.floor(Math.random() * request.data.results.length-1)]
            )
            return request;
        }

        fetchData();

    } , []);

    function truncate(str , n) {
        return str?.length > n ? str.substr(0 , n-1) + "..." : str;
    }

    return (
        <header className = "banner" 
        style = {{
            backgroundImage : `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")` , 
            backgroundSize : "cover" , 
            backgroundPosition : "center center"
            }}
        >
        <div className = "banner-content">
            <h1 className = "banner-title"> {movie?.title || movie?.name || movie?.original_name} </h1>
            <div className = "banner-buttons">
                <button className = "banner-button">Play</button>
                <button className = "banner-button"> My List</button>
            </div>
            <h1 className = "banner-description">{truncate(movie?.overview , 150)}</h1>
        </div>
        <div className = "banner-fadeButton" />
        </header>
    )
}

export default Banner;
