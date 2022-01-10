import styled from "styled-components";
import logo from "../assets/logo.png";
import axios from "axios";
import { useContext, useState, useEffect } from "react";
import UserContext from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const navigate = useNavigate();
    const { setAndPersistToken, setUserImage } = useContext(UserContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const body = {
        email: email,
        password: password
    }

    useEffect(() => {
        if (localStorage.getItem("token") !== null) {
            navigate("/hoje");
        }
    }, [navigate]);

    function handleLogin(e) {
        e.preventDefault();

        const promisse = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', body);
        promisse.then(response => {
            setAndPersistToken(response.data.token, response.data.image);
            setUserImage(response.data.image);
            navigate('/hoje');
        })
    }

    return (
        <Content>
            <div>
                <img src={logo} alt="Logo TrackIt" />
            </div>
            <Form onSubmit={handleLogin}>
                <input type="email" name="email" placeholder="email" required onChange={(e) => setEmail(e.target.value)} />
                <input type="password" name="senha" placeholder="senha" required onChange={(e) => setPassword(e.target.value)} />
                <Submit>Entrar</Submit>
            </Form>
            <p onClick={() => navigate("/cadastro")}>Não tem uma conta? Cadastre-se</p>
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
`
const Submit = styled.button`
    width: 303px;
    height: 45px;

    display: flex;
    justify-content: center;
    align-items: center;
    
    background: #52B6FF;
    color: #FFFFFF;
    
    border: none;
    border-radius: 5px;
    padding-left: 11px;
`