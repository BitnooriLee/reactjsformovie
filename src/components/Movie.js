import React from 'react';
import ReactDOM from 'react-dom/client';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({id,medium_cover_image, title, summary, genres }) { //Props
    return (
        <div>
            <img src={medium_cover_image} alt={title} />
            <h2>
            <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <p>{summary}</p>
            <ul>
                {genres.map((g) => (
                    <li key={g}>{g}</li>
                ))}
            </ul>
        </div>
    );
}

Movie.prototype = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}
export default Movie;