import {useEffect, useState} from "react";

export default function CoinTracker() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        const fetchCoins = async () => {
            try {
                const res = await fetch("https://api.coinpaprika.com/v1/tickers");
                const data = await res.json();
                setCoins(data);
            } catch (error) {
                console.error("Error fetching coins:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchCoins();
    }, []);

    return <div>
        <h1>The Coins!</h1>
        {loading ? <strong>Loading...</strong> : null}
        <ul>
            {coins.map((coin) => (
                <li key={coin.id}>
                    {coin.name}
                </li>
            ))}
        </ul>
    </div>
};