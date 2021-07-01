import React from 'react';
import UnkownPoster from '../../Assets/Images/UnknownMovie.jpg';

const Card = ( { Data } ) => {
    const rateLength = Data.vote_average ? Data.vote_average.toString().length : null;
    return (
        <div className="card">
            <div className="img-wrapper">
                {
                    Data.poster_path ? (
                        <img className="card-img" src={`https://image.tmdb.org/t/p/w400${Data.poster_path}`} alt={`${Data.title} poster`} />
                    ) : (
                        <img src={UnkownPoster} alt={`${Data.title} poster`} className="card-img" />
                    )
                }
            </div>
            <div className="card-name-wrapper">
                <span className="card-name">{Data.title ? Data.title : Data.name}</span>
            </div>
            <div className="card-year-type-wrapper">
                <span className="card-year">
                    {Data.release_date || Data.first_air_date ?
                        Data.release_date ?
                            Data.release_date.slice( 0, 4 ) : Data.first_air_date.slice( 0, 4 ) : '-'}
                </span>
                <span className="card-type">
                    {
                        Data.media_type === 'movie' ? 'فیلم' : 'سریال'
                    }
                </span>
            </div>
            <span className="card-rate">{Data.vote_average ? rateLength === 1 ? `${Data.vote_average}.0` : Data.vote_average : '0.0'}</span>
        </div>
    )
}

export default Card
