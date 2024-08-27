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
        width: 48px;
        height: 48px;
        background: #FFF;
        border-radius: 50%;
        display: inline-block;
        position: relative;
        box-sizing: border-box;
        animation: rotation 1s linear infinite;

        &::after {
            content: '';
            box-sizing: border-box;
            position: absolute;
            left: 6px;
            top: 10px;
            width: 12px;
            height: 12px;
            color: #FF3D00;
            background: currentColor;
            border-radius: 50%;
            box-shadow: 25px 2px, 10px 22px;
        }

        @keyframes rotation {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
    }
`;
export default function Loading() {
    return <Div>
        <span></span>
        <p>로딩 중...</p>
    </Div>
};