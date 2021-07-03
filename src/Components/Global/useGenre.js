export const useGenre = ( selectedGenres ) => {
    if ( selectedGenres.length === 0 ) {
        return ''
    }
    else {
        const genreID = selectedGenres.map( genre => genre.id );
        return genreID.reduce( ( acc, curr ) => acc + ',' + curr );
    }
}