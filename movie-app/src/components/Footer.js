import {styled} from "styled-components";

const Div = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    color: #494949;
`
export default function Footer() {
    const thisYear = () => {
        let year = new Date().getFullYear();
        return year
    };

    return <Div>
                Copyright &copy; <span>{thisYear()}</span>
            </Div>
};