import styled from "styled-components";
import TopBar from "./TopBar";
import Menu from "./Menu";

export default function HabitsPage() {
    return (
        <>
            <TopBar />
            <Content>
                <p>Teste</p>
            </Content>
            <Menu />
        </>
    )
}

const Content = styled.div`
    width: 100%;
    height: 100vh;

    padding: 70px 0;

    background: #E5E5E5;
`