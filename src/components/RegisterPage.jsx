import styled from "styled-components";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
    const navigate = useNavigate();

    return (
        <Content>
            <div>
                <img src={logo} alt="Logo TrackIt" />
            </div>
            <Form>
                <input type="email" name="email" placeholder="email" />
                <input type="password" name="senha" placeholder="senha" />
                <input type="text" name="nome" placeholder="nome" />
                <input type="link" name="foto" placeholder="foto" />
                <input type="button" value="Cadastrar" />
            </Form>
            <p onClick={() => navigate("/")}>Já tem uma conta? Faça login!</p>
        </ Content>
    )
}

const Content = styled.div`
    height: 100vh;

    padding-top: 68px;
    display: flex;
    flex-flow: column;
    align-items: center;

    gap: 30px;

    p {
        color: #52B6FF;
        text-decoration: underline;
    }

`

const Form = styled.form`
    display: flex;
    flex-flow: column;
    align-items: center;

    gap: 6px;

    input {
        width: 303px;
        height: 45px;

        border: 1px solid #D5D5D5;
        border-radius: 5px;

        padding-left: 11px;

        ::placeholder {
            color: #DBDBDB;
        }
    }

    input[type="button"] {
        background: #52B6FF;
        color: #FFFFFF;
    }
`