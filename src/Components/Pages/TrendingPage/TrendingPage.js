import React, { useState, useEffect } from 'react'
import TrendingCard from './TrendingCard';
import { RiFolderWarningFill } from 'react-icons/ri';

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

    console.log( TrendingData )

    return (
        <>
            <div className="trending-title">
                <h1>داغ ترین های روز</h1>
            </div>
            <div className="Trending-wrapper">
                {
                    TrendingData ? TrendingData.map( trendingMovie => (
                        <TrendingCard trendingMovie={trendingMovie} key={trendingMovie.id} />
                    ) ) : (
                        <p className="t-message"><RiFolderWarningFill /> اطلاعات پیدا نشد</p>
                    )
                }
            </div>
        </>

    )
}

export default TrendingPage
