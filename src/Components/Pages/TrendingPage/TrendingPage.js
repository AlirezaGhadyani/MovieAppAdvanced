import React, { useState, useEffect } from 'react'

const TrendingPage = () => {
    const [TrendingData, setTrendingData] = useState( [] );
    const fetchTrending = async () => {
        const response = await fetch( `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_MOVIE_API_KEY}` );
        const data = await response.json();
        setTrendingData( data.results );
    }

    useEffect( () => {
        fetchTrending()
    }, [] );

    return (
        <div className="Trending-wrapper">

        </div>
    )
}

export default TrendingPage
