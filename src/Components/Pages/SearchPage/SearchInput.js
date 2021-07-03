import React from 'react'

const SearchInput = ( { setQuery, query } ) => {

    const handleInputChange = ( event ) => {
        setQuery( event.target.value );
    }

    return (
        <div className="search-box-wrapper">
            <input placeholder="جستوجو کنید" className="search-inp" onChange={handleInputChange} value={query} />
        </div>
    )
}

export default SearchInput
