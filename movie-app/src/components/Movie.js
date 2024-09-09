import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {styled} from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const Main = styled.div`
        padding: 1rem;
        border-radius: 0.5rem;
        border: 1px solid #7c7c7c;
        & section {
           display: flex;
            & button {
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
        }
        & a {
            text-decoration: none;
            color: #7c7c7c;
        }
        & p {
            height: 120px;
            overflow-y: auto;
            padding: 0.5rem;
        }
        & ul {
            display: flex;
            flex-direction: column;
            height: 100px;
            color: #a5a5a5;
        }    
        & h3 {
            display: flex;
            height: 120px;
            align-items: center;
            justify-content: center;
            color: #a5a5a5;
        }
    `
function Movie({ id, coverImg, title, summary, genres }) {
    return (
        <Main>
            <img src={coverImg} alt={title}/>
            <section>
                <h2>
                    <Link to={`/movie/${id}`}>{title}</Link>
                </h2>
                <button type="button">
                    <Link to={`/movie/${id}`}>Detail
                        <FontAwesomeIcon icon={faArrowRightLong} />
                    </Link>
                </button>
            </section>
            <h4>장르</h4>
            <ul>
                {genres.map((g) => (
                    <li key={g}>{g}</li>
                ))}
            </ul>
            <h4>줄거리</h4>
            {summary !== "" && <p>{summary}</p>}
            {summary === "" && <h3>해당 영화의 줄거리가 존재하지않습니다.</h3>}

        </Main>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;