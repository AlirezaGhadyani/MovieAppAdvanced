import React, { useState, useEffect } from 'react'
import TrendingCard from './TrendingCard';
import { RiFolderWarningFill } from 'react-icons/ri';
import ReactPaginate from 'react-paginate';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'

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
    }, [pageNum] );

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

            <ReactPaginate
                pageCount={totalPage}
                pageRangeDisplayed={2}
                nextLabel={<GrFormNext />}
                previousLabel={<GrFormPrevious />}
                onPageChange={pageChange}
                containerClassName="pagination-wrapper"
                previousLinkClassName="pagination-prev-btn"
                nextLinkClassName="pagination-next-btn"
                disabledClassName="disable-pagination"
                activeClassName="active-pagination" />
        </>

    )
}

export default TrendingPage
