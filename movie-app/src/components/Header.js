import {Link} from "react-router-dom";
import {styled} from "styled-components";

const StyledLink = styled(Link)`
    display: block;
    text-align: center;
    text-decoration: none;
    color: palevioletred;
    padding: 1.5rem;
    border: 1px solid #7c7c7c;
    border-radius: 0.5rem;
    margin: 0.4rem;
    background-color: #f6e6e6;
`;
export default function Header() {
    return <>
        <header>
            <h2>
                <StyledLink to="/">Introduce Movie</StyledLink>
            </h2>
        </header>
    </>
};