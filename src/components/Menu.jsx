import styled from "styled-components";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useNavigate } from "react-router-dom";

export default function Menu() {
    const navigate = useNavigate();

    const percentage = 66;

    return (
        <>
            <Content>
                <button onClick={() => navigate("/habitos")}>Hábitos</button>
                <ProgressButton>
                    <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
                            backgroundColor: "#3e98c7",
                            textColor: "#fff",
                            pathColor: "#fff",
                            trailColor: "transparent"
                        })}
                    />
                </ProgressButton>
                <button onClick={() => navigate("/historico")}>Histórico</button>
            </Content>
        </>
    )
}

const Content = styled.div`
    width: 100%;
    height: 70px;
    padding: 0 34px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background: #FFFFFF;

    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;

    button {
        width: 79px;
        height: 22px;
        
        border: none;
        background: none;

        font-style: normal;
        font-weight: normal;
        font-size: 17.976px;
        line-height: 22px;
        text-align: center;

        color: #52B6FF;
    }
`
const ProgressButton = styled.div`
    width: 91px;
    height: 91px;

    align-self: end;

    margin-bottom: 10px;
`