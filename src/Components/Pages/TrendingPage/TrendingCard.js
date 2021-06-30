import React from 'react'

const TrendingCard = ( { trendingMovie } ) => {
    return (
        <div className="trending-card">
            <div className="t-img-wrapper">
                <img className="t-img" />
            </div>
            <div className="t-info-wrapper">
                <span className="t-name"></span>
                <div className="t-year-type">
                    <span className="t-year"></span>
                    <span className="t-type"></span>
                </div>
            </div>
            <span className="t-rate"></span>
        </div>
    )
}

export default TrendingCard
