import React, { useEffect } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const Genres = ( {
    type,
    setGenres,
    genres,
    setSelectedGenres,
    setTotalPage
} ) => {

    //Fetch all genres
    const fetchGenres = async () => {
        try {
            const response = await fetch( `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US` );
            const data = await response.json();
            setGenres( data.genres );
        } catch ( error ) {
            console.log( error );
        }
    }

    //call fetch when component did mount and remove genres when did unmount
    useEffect( () => {
        fetchGenres()

        return () => {
            setGenres( [] );
        };

        // eslint-disable-next-line
    }, [] );

    //genres select options
    let options = [];
    genres && genres.map( genre => options.push( { value: genre.name, label: genre.name, id: genre.id } ) );

    const animatedComponents = makeAnimated();

    const handleGetGenres = ( selectedGenres ) => {
        setSelectedGenres( selectedGenres )
    }

    const customTheme = ( theme ) => {
        return {
            ...theme,
            control: styles => ( { ...styles, backgroundColor: 'red' } ),
        };
    }

    return (
        <div className="genre-wrapper">
            <Select
                closeMenuOnSelect={false}
                components={animatedComponents}
                isMulti
                placeholder={`ژانر ${type === 'movie' ? 'فیلم' : 'سریال'}`}
                options={options}
                onChange={handleGetGenres}
                theme={customTheme}
            />
        </div>
    )
}

export default Genres
