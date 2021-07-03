import React, { useState, useEffect } from 'react';
import SearchInput from './SearchInput';
import Card from '../../Global/Card';
import ReactPaginate from 'react-paginate';

const SearchPage = () => {
    const [query, setQuery] = useState( '' );
    const [searchedData, setSearchedData] = useState( [] );
    const [totalPages, setTotalPages] = useState( null );
    const [pageNum, setPageNum] = useState( 1 );

    const fetchSearchedMedia = async () => {
        try {
            const response = await fetch( `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&query=${query}&page=${pageNum}&include_adult=false` );
            const data = await response.json();
            setSearchedData( data.results );
            setTotalPages( data.total_pages );

        } catch ( error ) {
            console.log( error );
        }
    }

    useEffect( () => {
        if ( query !== '' ) {
            fetchSearchedMedia()
        }
        // eslint-disable-next-line
    }, [query, pageNum] );

    const pageChange = ( { selected } ) => {
        setPageNum( selected + 1 );
        window.scroll( 0, 0 );
    }

    return (
        <>
            <SearchInput setQuery={setQuery} query={query} />

            <div className="card-wrapper">
                {searchedData && searchedData.map( media => (
                    <Card Data={media} key={media.id} />
                ) )}
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

export default SearchPage
