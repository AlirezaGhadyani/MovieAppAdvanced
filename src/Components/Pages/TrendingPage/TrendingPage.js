import React, { useState, useEffect } from 'react'
import Card from '../../Global/Card';
import { RiFolderWarningFill } from 'react-icons/ri';
import ReactPaginate from 'react-paginate';

const TrendingPage = () => {
    const [TrendingData, setTrendingData] = useState( [] );
    const [pageNum, setPageNum] = useState( 1 );
    const [totalPage, setTotalPage] = useState( 0 );

    const fetchTrending = async () => {
        try {
            const response = await fetch( `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&page=${pageNum}` );
            const data = await response.json();
            setTrendingData( data.results );
            setTotalPage( data.total_pages )

        } catch ( error ) {
            console.log( error );
        }
    }

    const pageChange = ( { selected } ) => {
        setPageNum( selected + 1 );
        window.scroll( 0, 0 );
    }

    useEffect( () => {
        fetchTrending();
        // eslint-disable-next-line
    }, [pageNum] );

    return (
        <>
            <div className="trending-title">
                <h1>داغ ترین های روز</h1>
            </div>
            <div className="card-wrapper">
                {
                    TrendingData ? TrendingData.map( trendingMovie => (
                        <Card Data={trendingMovie} key={trendingMovie.id} />
                    ) ) : (
                        <p className="t-message"><RiFolderWarningFill /> اطلاعات پیدا نشد</p>
                    )
                }
            </div>

            <ReactPaginate
                pageCount={totalPage}
                pageRangeDisplayed={2}
                onPageChange={pageChange}
                previousLabel={''}
                nextLabel={''}
                previousClassName="paginate-p"
                nextClassName="paginate-n"
                containerClassName="pagination-wrapper"
                disabledClassName="disable-pagination"
                activeClassName="active-pagination" />
        </>

    )
}

export default TrendingPage
