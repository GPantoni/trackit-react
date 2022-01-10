import styled from "styled-components";
import TopBar from "./TopBar";
import Menu from "./Menu";

export default function HistoryPage() {
    return (
        <>
            <TopBar />
            <Content>
                <h1>Histórico</h1>
                <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            </Content>
            <Menu />
        </>
    )
}

const Content = styled.div`
    width: 100%;
    height: 100vh;

    background: #E5E5E5;

    padding: 100px 17px;

    h1{
        width: 100px;
        height: 29px;

        margin-bottom: 17px;

        font-style: normal;
        font-weight: normal;
        font-size: 22.976px;
        line-height: 29px;

        color: #126BA5;
    }

    p{
        width: 338px;
        height: 74px;

        font-style: normal;
        font-weight: normal;
        font-size: 17.976px;
        line-height: 22px;

        color: #666666;
    }
`