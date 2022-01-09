import styled from "styled-components";
import headerlogo from "../assets/header-logo.png";

export default function TopBar() {
    return (
        <Content>
            <div>
                <img src={headerlogo} alt="TrackIt" />
            </div>
            <ProfilePic />
        </Content>
    )
}

const Content = styled.div`
    width: 100%;
    height: 70px;

    padding: 0 18px;
    
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: space-between;
`
const ProfilePic = styled.img`
    width: 51px;
    height: 51px;
    border-radius: 98.5px;
`