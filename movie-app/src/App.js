import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import Header from "./components/Header";
function App() {
    return (
        // gh page를 사용할 경우 basename="레파지토리명" 작성하기
        <BrowserRouter basename="cloneCoding">
            <Header />
            <Routes>
                <Route path="/movie/:id" element={<Detail />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>

    );
}

export default App;