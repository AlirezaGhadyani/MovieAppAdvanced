import React, { useState, useEffect } from 'react'
import Card from '../../Global/Card';
import { AiOutlineWarning } from 'react-icons/ai';
import ReactPaginate from 'react-paginate';

const TrendingPage = () => {
    const [TrendingData, setTrendingData] = useState( [] );
    const [dataStatus, setDataStatus] = useState( false );
    const [pageNum, setPageNum] = useState( 1 );
    const [totalPage, setTotalPage] = useState( 0 );

    const fetchTrending = async () => {
        try {
            const response = await fetch( `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&page=${pageNum}` );
            const data = await response.json();
            setTrendingData( data.results );
            setTotalPage( data.total_pages );
            setDataStatus( true );

        } catch ( error ) {
            console.log( error );
            setDataStatus( false );
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
    console.log( TrendingData )
    return (
        <>
            <div className="trending-title">
                {dataStatus ? (
                    <h1>داغ ترین های روز</h1>
                ) : (
                    <h1>فیلترشکن خود را روشن کنید</h1>
                )}
            </div>
            <div className="card-wrapper">
                {
                    TrendingData && TrendingData.map( trendingMovie => (
                        <Card Data={trendingMovie} key={trendingMovie.id} />
                    ) )
                }
                {
                    !dataStatus && (
                        <p className="t-message"><AiOutlineWarning /> مشکل در دریافت اطلاعات<AiOutlineWarning /></p>
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
