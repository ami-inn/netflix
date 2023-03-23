import React, { useEffect, useState } from "react";
import axios from "../../axios";
import { imageUrl, API_KEY } from "../../Constants/Constants";

import { Link } from "react-router-dom";
import "./RowPost.css";
import YouTube from "react-youtube";

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, serUrlId] = useState("");

  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovie = (id) => {
    console.log(id);

    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        if (response.data.results.length !== 0) {
          serUrlId(response.data.results[0]);
        } else {
          console.log("array empty");
        }
      });
  };

  return (
    <div className="row">
      <h2>{props.title}</h2>

      <div className="posters">
        {movies?.map((obj) => {
          return (
            <Link to={'/watch/'+obj.id}>
              <div
                // onClick={() => {
                //   handleMovie(obj.id);
                // }}
                className="image"
              >
                {props.isSmall ? (
                  <img
                    className={props.isSmall ? "small-poster" : "poster"}
                    src={`${imageUrl + obj.backdrop_path}`}
                    alt="posters"
                  />
                ) : (
                  <div
                    className="originals"
                    style={{
                      backgroundImage: `url(${imageUrl + obj.backdrop_path})`,
                    }}
                  >
                    <h5 className="title">
                      {obj.name
                        ? obj.name
                        : obj.original_title
                        ? obj.original_title
                        : obj.original_name}
                    </h5>

                    <p>{obj.overview}</p>
                  </div>
                )}

                {props.isSmall ? (
                  <div className={props.isSmall ? "content" : ""}>
                    <h5 className="title">
                      {obj.name
                        ? obj.name
                        : obj.original_title
                        ? obj.original_title
                        : obj.original_name}
                    </h5>

                    <p>{obj.overview}</p>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </Link>
          );
        })}
      </div>

      {urlId && <YouTube videoId={urlId.key} opts={opts} />}
    </div>
  );
}

export default RowPost;
