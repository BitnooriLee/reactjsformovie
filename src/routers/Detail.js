import React from 'react';
import ReactDOM from 'react-dom/client';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

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
    {details.map((detail) => (
      <Detail 
      key={detail.id}
      id= {detail.id}
      large_cover_image = {detail.large_cover_image}
      description_Intro ={detail.description_intro}
      description_full={detail.description_full}
      rating={detail.rating}
      />
    ))}
    </div>
    )}
    </div> 
}

export default Detail;