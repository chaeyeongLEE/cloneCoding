import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {styled} from "styled-components";
import Loading from "../components/Loading";

const Div = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: rosybrown;
    padding: 0 0.5rem;
    
    & a {
        color: #ffffff;
        text-decoration: none;
        font-size: 0.85rem;
        font-weight: 700;
        background-color: rosybrown;
        padding: 0.4rem;
        border-radius: 0.5rem;
        
        &:hover {
            opacity: 0.7;
            transition: ease-in 0.25s ;
            cursor: pointer;
        }
    }
`;


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
        <Div>
            <h2>Detail</h2>
            <p>
                <Link to="/">뒤로가기 🔙</Link>
            </p>
        </Div>

        {loading ? <Loading /> :
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
