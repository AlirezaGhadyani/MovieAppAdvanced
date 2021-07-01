import React from 'react';
import UnkownPoster from '../../../Assets/Images/UnknownMovie.jpg'

const TrendingCard = ( { trendingMovie } ) => {
    const rateLength = trendingMovie.vote_average ? trendingMovie.vote_average.toString().length : null;
    return (
        <div className="trending-card">
            <div className="t-img-wrapper">
                {
                    trendingMovie.poster_path ? (
                        <img className="t-img" src={`https://image.tmdb.org/t/p/w400${trendingMovie.poster_path}`} alt={`${trendingMovie.title} poster`} />
                    ) : (
                        <img src={UnkownPoster} alt={`${trendingMovie.title} poster`} className="t-img" />
                    )
                }
            </div>
            <div className="t-name-wrapper">
                <span className="t-name">{trendingMovie.title ? trendingMovie.title : trendingMovie.name}</span>
            </div>
            <div className="t-year-type-wrapper">
                <span className="t-year">
                    {trendingMovie.release_date || trendingMovie.first_air_date ?
                        trendingMovie.release_date ?
                            trendingMovie.release_date.slice( 0, 4 ) : trendingMovie.first_air_date.slice( 0, 4 ) : '-'}
                </span>
                <span className="t-type">
                    {
                        trendingMovie.media_type === 'movie' ? 'فیلم' : 'سریال'
                    }
                </span>
            </div>
            <span className="t-rate">{trendingMovie.vote_average ? rateLength === 1 ? `${trendingMovie.vote_average}.0` : trendingMovie.vote_average : '0.0'}</span>
        </div>
    )
}

export default TrendingCard
