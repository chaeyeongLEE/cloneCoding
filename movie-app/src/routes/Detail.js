import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {styled} from "styled-components";
import Loading from "../components/Loading";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeftLong} from "@fortawesome/free-solid-svg-icons";

const Div = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: rosybrown;
    padding: 0 0.5rem;

    & button {
        text-decoration: none;
        margin: 1.1rem;
        width: 90px;
        padding: 0.3rem;
        height: 30px;
        border: 1px solid #7c7c7c;
        border-radius: 0.7rem;
        opacity: 0.7;
        &:hover {
            opacity: 1;
            transition: ease-in 0.25s ;
            cursor: pointer;
        }
    }
`;

const Section = styled.section`
    display: flex;
    flex-direction: row;

    @media (max-width: 1024px) {
        flex-direction: column;
    }

    /* 모바일 */
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const Article = styled.article`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: wrap;
    padding: 1.5rem;
    margin: 0 1rem;
    background-color: #ccb6b6;
    width: 100%;
    border-radius: 0.6rem;
    gap: 0.5rem;

    @media (max-width: 1024px) {
        background-color: #ffffff;
        margin: 0;
    }

    /* 모바일 */
    @media (max-width: 768px) {
        background-color: #ffffff;
        margin: 0;
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
            <h2>Movie's Detail</h2>
            <button type="button">
                <Link to="/">Back <FontAwesomeIcon icon={faArrowLeftLong} /></Link>
            </button>
        </Div>

        {loading ? <Loading /> :
            <Section>
                <img src={movieInfo.movie.medium_cover_image} alt="moviePicture" />
                <Article>
                    <h2>{movieInfo.movie.title_long}</h2>
                    {/*<span>장르: {movieInfo.movie.genres.map((item) => ` ${item} |`)}</span>*/}
                    <span>Running Time: {movieInfo.movie.runtime} minutes</span>
                    <span>Genre: {movieInfo.movie.genres.map((item) => item).join(" | ")}</span>
                    {/*위와 같이 작성하면 제일 마지막 순서에서는 |가 붙지않는다!*/}
                    <span>Update Date : {movieInfo.movie.date_uploaded}</span>
                </Article>

            </Section>}
    </>;
}

export default Detail;
