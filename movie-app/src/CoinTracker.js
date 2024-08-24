import {useEffect, useState} from "react";

export default function CoinTracker() {
    const [loading, setLoading] = useState(true);
    // const [coins, setCoins] = useState([]);
    const [movies, setMovies] = useState([]);

    // useEffect(() => {
    //     const fetchCoins = async () => {
    //         try {
    //             const res = await fetch("https://api.coinpaprika.com/v1/tickers");
    //             const data = await res.json();
    //             setCoins(data);
    //         } catch (error) {
    //             console.error("Error fetching coins:", error);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };
    //     fetchCoins();
    // }, []);
    useEffect(() => {
        const getMovies = async () => {
            try {
                const res = await (await fetch (`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)).json();
                setMovies(res.data.movies);
            } catch (error) {
                console.error("Error fetching movies:", error);
            } finally {
                setLoading(false);
            }
        }
        getMovies();
    }, []);
    // useEffect(() => {
    //     fetch("https://api.coinpaprika.com/v1/tickers")
    //       .then((response) => response.json())
    //       .then((json) => {
    //         setCoins(json);
    //         setLoading(false);
    //       });

    return <div>
        <h1>The Coins!</h1>
        {loading ? <h1>Loading...</h1> : movies.map(movie=>
            <div key={movie.id}>
                <h3>{movie.title}</h3>
                <p>{movie.summary}</p>
                <ul>
                   {movie.genres.map((genres)=> (
                        <li key={genres}>{genres}</li>
                    ))}
                </ul>
            </div>)}
    </div>
};