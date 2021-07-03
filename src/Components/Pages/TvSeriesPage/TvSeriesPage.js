import React, { useState, useEffect } from 'react';
import { RiFolderWarningFill } from 'react-icons/ri';
import Card from '../../Global/Card';
import ReactPaginate from 'react-paginate';
import Genres from '../../Global/Genres';
import { useGenre } from '../../Global/useGenre';

const TvSeriesPage = () => {
    const [tvSeriesData, setTvSeriesData] = useState( [] );
    const [totalPages, setTotalPages] = useState();
    const [pageNum, setPageNum] = useState( 1 );
    // State for Genres
    const [genres, setGenres] = useState( [] );
    const [selectedGenres, setSelectedGenres] = useState( [] );
    const selectedGenreID = useGenre( selectedGenres );

    //Fetch tv series data
    const fetchTvSeries = async () => {
        try {
            const response = await fetch( `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&sort_by=popularity.desc&page=${pageNum}&with_genres=${selectedGenreID}&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate` );
            const data = await response.json();
            setTvSeriesData( data.results );
            setTotalPages( data.total_pages );
        } catch ( error ) {
            console.log( error );
        }
    }

    // Fetch data when component and page number and genre change
    useEffect( () => {
        fetchTvSeries();
        // eslint-disable-next-line
    }, [pageNum, selectedGenres] )

    //paginate page change function
    const pageChange = ( { selected } ) => {
        setPageNum( selected + 1 );
        window.scroll( 0, 0 );
    }

    return (
        <>
            <Genres
                type="tv"
                setGenres={setGenres}
                genres={genres}
                selectedGenres={selectedGenres}
                setSelectedGenres={setSelectedGenres} />

            <div className="card-wrapper">
                {tvSeriesData ? tvSeriesData.map( tvShow => (
                    <Card Data={tvShow} key={tvShow.id} />
                ) ) : (
                    <p className="t-message"><RiFolderWarningFill /> اطلاعات پیدا نشد</p>
                )}
            </div>

            <ReactPaginate
                pageCount={totalPages}
                pageRangeDisplayed={2}
                onPageChange={pageChange}
                containerClassName="pagination-wrapper"
                previousClassName="paginate-p"
                nextClassName="paginate-n"
                activeClassName="active-pagination" />
        </>
    )
}

export default TvSeriesPage
