import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import Header from "./components/Header";
import {styled} from "styled-components";
import Footer from "./components/Footer";

const Div = styled.div`
   margin: 2rem 10rem;
`
const Headers = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    height: 80px;
    width: 100%;
    background-color: #f6f6f6;
    z-index: 100;
`
const Section = styled.section`
    padding-top: 4.375rem;
    padding-bottom: 3rem;
`
const Footers = styled.footer`
    position: fixed;
    bottom: 0; left: 0;
    height: 70px;
    width: 100%;
    background-color: #f6f6f6;
`
function App() {
    return (
        <Div>
            <BrowserRouter basename="cloneCoding">
                {/*gh page를 사용할 경우 basename="레파지토리명" 작성하기*/}
                <Headers>
                    <Header/>
                </Headers>
                <Section>
                    <Routes>
                        <Route path="/movie/:id" element={<Detail/>}/>
                        <Route path="/" element={<Home/>}/>
                    </Routes>
                </Section>
                <Footers>
                    <Footer/>
                </Footers>
            </BrowserRouter>
        </Div>
    );
}

export default App;