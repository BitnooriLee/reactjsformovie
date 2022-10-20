import React from 'react';
import ReactDOM from 'react-dom/client';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Counter(props) {
    return (
        <h2>
          Total {props.movies.length} movies 
        </h2>
    )
}

export default Counter;