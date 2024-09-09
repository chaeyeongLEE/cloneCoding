import {Link} from "react-router-dom";
import {styled} from "styled-components";

const StyledLink = styled(Link)`
    display: block;
    text-align: center;
    text-decoration: none;
    color: #a8999d;
`;
export default function Header() {
    return <>
            <h2>
                <StyledLink to="/">Introduce Movie</StyledLink>
            </h2>
    </>
};