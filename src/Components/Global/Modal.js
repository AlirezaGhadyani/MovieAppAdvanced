import React, { useState, useEffect } from "react";
import UnkownPoster from "../../Assets/Images/UnknownMovie.jpg";
import UnkownPosterLand from "../../Assets/Images/UnknownMovie-land.jpg";
import { FaYoutube } from "react-icons/fa";
import ModalCarousel from "./ModalCarousel";

const Modal = ({ showModal, setShowModal, CardData }) => {
  const [mediaData, setMediaData] = useState({});
  const [mediaVideo, setMediaVideo] = useState("");

  const fetchMediaData = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/${
          CardData.first_air_date ? "tv" : "movie"
        }/${
          CardData.id
        }?api_key=b3eed8b2480412d418e8776c212425e9&language=en-US`
      );
      const data = await response.json();
      setMediaData(data);
    } catch (error) {}
  };

  const fetchMediaVideo = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/${
          CardData.first_air_date ? "tv" : "movie"
        }/${
          CardData.id
        }/videos?api_key=b3eed8b2480412d418e8776c212425e9&language=en-US`
      );
      const data = await response.json();
      setMediaVideo(data.results[0] ? data.results[0].key : null);
    } catch (error) {}
  };

  useEffect(() => {
    fetchMediaData();
    fetchMediaVideo();

    return () => {
      setMediaData({});
      setMediaVideo("");
    };
  }, []);

  const firstAirDate =
    mediaData.first_air_date && mediaData.first_air_date.substr(0, 4);
  const releaseDate =
    mediaData.release_date && mediaData.release_date.substr(0, 4);

  return (
    <>
      {
        <div className="modal-wrapper" onClick={() => setShowModal(false)}>
          <div className="data-wrapper" onClick={(e) => e.stopPropagation()}>
            <div className="image-info-wrapper">
              <div className="modal-img">
                {mediaData.poster_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w400${mediaData.poster_path}`}
                    className="portrait-modal-img"
                    alt={mediaData.title || mediaData.original_name}
                  />
                ) : (
                  <img
                    src={UnkownPoster}
                    className="portrait-modal-img"
                    alt={mediaData.title || mediaData.original_name}
                  />
                )}

                {mediaData.backdrop_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${mediaData.backdrop_path}`}
                    className="land-modal-img"
                    alt={mediaData.title || mediaData.original_name}
                  />
                ) : (
                  <img
                    src={UnkownPosterLand}
                    className="land-modal-img"
                    alt={mediaData.title || mediaData.original_name}
                  />
                )}
              </div>
              <div className="modal-info">
                <span className="modal-name">{`${
                  mediaData.title || mediaData.original_name
                } ( ${firstAirDate || releaseDate} )`}</span>
                <div className="status-budget">
                  <h4 className="modal-status">
                    {mediaData.status && mediaData.status === "Released"
                      ? "وضعیت : منتشر شده"
                      : "وضعیت : منتشر نشده"}
                  </h4>
                  <h4 className="modal-budget">
                    {typeof mediaData.budget === "undefined" ||
                    mediaData.budget === 0
                      ? "بودجه : اعلام نشده"
                      : `بودجه : ${mediaData.budget}`}
                  </h4>
                </div>
                {mediaData.overview && (
                  <p className="modal-desc">{mediaData.overview}</p>
                )}
              </div>
            </div>
            <ModalCarousel
              mediaID={CardData.id}
              mediaType={CardData.first_air_date ? "tv" : "movie"}
            />

            <a
              className="youtube-btn"
              href={
                mediaVideo && `https://www.youtube.com/watch?v=${mediaVideo}`
              }
            >
              <FaYoutube className="youtube-icon" /> تماشای تریلر در یوتیوب
            </a>
          </div>
        </div>
      }
    </>
  );
};

export default Modal;
