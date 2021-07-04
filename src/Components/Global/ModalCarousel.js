import React, { useState, useEffect } from 'react'
import AliceCarousel from 'react-alice-carousel';
import UnkownPoster from '../../Assets/Images/UnknownMovie.jpg';
import "../../Styles/modal.css"
import 'react-alice-carousel/lib/alice-carousel.css';

const ModalCarousel = ( { mediaID, mediaType } ) => {
    const [mediaCrew, setMediaCrew] = useState( [] );

    const handleDragStart = ( e ) => e.preventDefault();

    const fetchMediaCrew = async () => {
        try {
            const response = await fetch( `https://api.themoviedb.org/3/${mediaType}/${mediaID}/credits?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US` );
            const data = await response.json();
            setMediaCrew( data.cast );
        } catch ( error ) {
            console.log( error );
        }
    }

    useEffect( () => {
        fetchMediaCrew();
    }, [] );

    const items = mediaCrew && mediaCrew.map( crew => (
        <div className="crew-item">
            <img className="crew-img" src={crew.profile_path ? `https://image.tmdb.org/t/p/w300${crew.profile_path}` : UnkownPoster} alt={`${crew.name} profile img`} onDragStart={handleDragStart} />
            <span className="crew-name">{crew.name}</span>
        </div>
    ) );

    const responsive =
    {
        0: {
            items: 2,
        },
        360: {
            items: 3
        },
        520: {
            items: 3
        },
        768: {
            items: 6
        },
        1024: {
            items: 7
        },
    }

    return (
        <div className="modal-carousel">
            <AliceCarousel
                mouseTracking
                items={items}
                responsive={responsive}
                autoPlay
                disableDotsControls
                disableButtonsControls />
        </div>
    )
}

export default ModalCarousel
