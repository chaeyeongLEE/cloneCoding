import {styled} from "styled-components";

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(255, 255, 255, 0.8);
    z-index: 9999;
    
    & span {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 5px solid transparent;
        border-top-color: #3498db;
        animation: spin 1s linear infinite;

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    }
`;
export default function Loading() {
    return <Div>
        <span></span>
        <p>로딩 중...</p>
    </Div>
};