import React from 'react';
import ReactDOM from 'react-dom/client';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Movie from '../components/Movie';
import { Link } from "react-router-dom";


function Detail() {
    const [loading, setLoading] = useState(true);
    const [details, setDetails] = useState([]);
    const { id } = useParams();
    const getDetails = async () => {
        const json = await(
            await fetch(
                `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
                )
        ).json();
        setDetails(json.data.movie);
        console.log(json.data.movie);
        console.log(id);
        setLoading(false);
    };
    useEffect(() => {
        getDetails();
      }, []);

    return <div>
    {loading ? (
    <h1>Loading...</h1>
    ) : (
        <div>
        <button>Back to home</button>
        <h2>{details.title}</h2>
        <img src={details.large_cover_image} alt={details.title} />
        <p>{details.rating}</p>
        <p>{details.description_full}</p>
        <ul>
            {details.genres.map((g) => (
                <li key={g}>{g}</li>
            ))}
        </ul>
    </div>
    )}
    </div> 
}



export default Detail;



 /*   {details.map((detail) => (
      <Movie 
      key={detail.id}
      id= {detail.id}
      medium_cover_image={detail.medium_cover_image}
      title={detail.title}
      summary={detail.summary}
      genres={detail.summary}
      />
    ))} */