import React from 'react';
import ReactDOM from 'react-dom/client';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

function Detail() {
    const [loading, setLoading] = useState(true);
    const [details, setDetails] = useState([]);
    const {id } = useParams();
    const getDetails = async () => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setDetails(json.data.movie.details);
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
    <h1>Detial</h1>
    {details.map((detail) => (
      <Detail 
      key={detail.id}
      id= {detail.id}
      medium_cover_image={detail.medium_cover_image}
      title={detail.title}
      summary={detail.summary}
      genres={detail.genres}
      />
    ))}
    </div>
    )}
    </div>  
}

export default Detail;