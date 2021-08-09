import React, { useState, useEffect } from "react";
import Card from "../../Global/Card";
import { AiOutlineWarning } from "react-icons/ai";
import ReactPaginate from "react-paginate";
import Genres from "../../Global/Genres";
import { useGenre } from "../../Global/useGenre";

const MoviePage = () => {
  const [moviesData, setMovieData] = useState([]);
  const [dataStatus, setDataStatus] = useState(false);
  const [pageNum, setPageNum] = useState(1);
  const [totalPages, setTotalPage] = useState(0);
  // State for Genres
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const selectedGenreID = useGenre(selectedGenres);

  //Fetching Movie Data
  const fethcMovies = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=b3eed8b2480412d418e8776c212425e9&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNum}&with_genres=${selectedGenreID}&with_watch_monetization_types=flatrate`
      );
      const data = await response.json();
      setMovieData(data.results);
      setTotalPage(data.total_pages);
      setDataStatus(true);
    } catch (error) {
      console.log(error);
      setDataStatus(false);
    }
  };

  //Functionality for paginate

  const pageChange = ({ selected }) => {
    setPageNum(selected + 1);
    window.scroll(0, 0);
  };

  //Fetch Data after PageNumber change

  useEffect(() => {
    fethcMovies();
    // eslint-disable-next-line
  }, [pageNum, selectedGenres]);

  return (
    <>
      <Genres
        type="movie"
        setGenres={setGenres}
        genres={genres}
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
      />

      <div className="card-wrapper">
        {moviesData &&
          moviesData.map((movieData) => (
            <Card Data={movieData} key={movieData.id} />
          ))}

        {!dataStatus && (
          <p className="t-message">
            <AiOutlineWarning /> مشکل در دریافت اطلاعات
            <AiOutlineWarning />
          </p>
        )}
      </div>

      <ReactPaginate
        pageCount={totalPages}
        pageRangeDisplayed={2}
        onPageChange={pageChange}
        containerClassName="pagination-wrapper"
        previousClassName="paginate-p"
        nextClassName="paginate-n"
        activeClassName="active-pagination"
      />
    </>
  );
};

export default MoviePage;
