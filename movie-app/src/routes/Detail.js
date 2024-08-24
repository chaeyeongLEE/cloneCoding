import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";

function Detail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [movieInfo, setMovieInfo] = useState([]);

    useEffect(() => {
        const getMovie = async () => {
            const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
            const json = await response.json();
            setMovieInfo(json.data);
            setLoading(false);
            console.log('movieInfo:',movieInfo);
        };
        getMovie();
    }, []);

    return <>
        <h1>Detail</h1>
        {loading ? <h1>lodaing...</h1> :
        <div>
          <img src={movieInfo.movie.medium_cover_image} alt="moviePicture" />
            <hr />
          <h2>title : {movieInfo.movie.title}</h2>
          <span>{movieInfo.movie.genres.map((item)=> `장르: ${item}`)}</span>
            <br />
          <span>업로드일자 : {movieInfo.movie.date_uploaded}</span>
        </div>}
    </>;
}

export default Detail;
