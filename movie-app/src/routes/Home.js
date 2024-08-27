import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import {styled} from "styled-components";
import Loading from "../components/Loading";

const Span = styled.span`
        display: flex;
        width: 100%;
        color: rosybrown;
        justify-content: flex-end;
        padding-right: 1.5rem;
        margin-bottom: 0.5rem;
        font-size: 0.85rem;
    `
const Div = styled.div`
        display: grid;
        grid-auto-rows: minmax(200px, auto);
        grid-template-columns: repeat(2,1fr);
        padding: 0.5rem;
        gap: 1rem;

        /* 아이패드 */
        @media (max-width: 1024px) {
            grid-template-columns: repeat(1, 1fr);
        }
    
        /* 모바일 */
        @media (max-width: 768px) {
            grid-template-columns: 1fr;
        }
    
        & img {
            align-items: center;
            justify-content: center;
        }
    `
function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
            )
        ).json();
        setMovies(json.data.movies);
        setLoading(false);
    };
    useEffect(() => {
        getMovies();
    }, []);
    return (
            <div>
                {loading ? (
                    <Loading />
                ) : (
                    <>
                        <Span>영화제목 클릭 시 상세정보 페이지로 이동합니다.</Span>
                        <Div>
                            {movies.map((movie) => (
                                <Movie
                                    key={movie.id}
                                    id={movie.id}
                                    coverImg={movie.medium_cover_image}
                                    title={movie.title}
                                    summary={movie.summary}
                                    genres={movie.genres}
                                />
                            ))}
                        </Div>
                    </>
                )}
            </div>
    );
}

export default Home;