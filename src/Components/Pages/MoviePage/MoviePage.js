import React, { useState, useEffect } from 'react';
import Card from '../../Global/Card';
import { RiFolderWarningFill } from 'react-icons/ri';
import ReactPaginate from 'react-paginate';
import Select from 'react-select'
import makeAnimated from 'react-select/animated';

const MoviePage = () => {
    const [moviesData, setMovieData] = useState( [] );
    const [pageNum, setPageNum] = useState( 1 );
    const [totalPage, setTotalPage] = useState( 0 );
    const fethcMovies = async () => {
        try {
            const response = await fetch( `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNum}&with_watch_monetization_types=flatrate` );
            const data = await response.json();
            setMovieData( data.results );
            setTotalPage( data.total_pages );
        } catch ( error ) {
            console.log( error );
        }
    }

    const pageChange = ( { selected } ) => {
        setPageNum( selected + 1 );
        window.scroll( 0, 0 );
    }

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ];

    useEffect( () => {
        fethcMovies();
    }, [pageNum] );

    return (
        <>
            <Select
                options={options}
                className="select"
                closeMenuOnSelect={false}
                components={makeAnimated}
                placeholder="انتخاب ژانر فیلم"
                isMulti />

            <div className="card-wrapper">
                {moviesData ?
                    moviesData.map( movieData => (
                        <Card Data={movieData} key={movieData.id} />
                    ) ) : (
                        <p className="t-message"><RiFolderWarningFill /> اطلاعات پیدا نشد</p>
                    )}
            </div>
            <ReactPaginate
                pageCount={totalPage}
                pageRangeDisplayed={2}
                onPageChange={pageChange}
                previousLabel={''}
                nextLabel={''}
                containerClassName="pagination-wrapper"
                previousClassName="paginate-p"
                nextClassName="paginate-n"
                activeClassName="active-pagination" />
        </>

    )
}

export default MoviePage
