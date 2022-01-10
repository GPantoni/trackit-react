import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";
import logo from "../assets/logo.png";

export default function RegisterPage() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const userData = {
        email: email,
        name: name,
        image: image,
        password: password
    };

    const [buttonColor, setButtonColor] = useState('#52B6FF');
    const [buttonValue, setButtonValue] = useState(<ThreeDots type="ThreeDots" color="#FFFFFF" height={10} width={80} />);
    const [disabled, setDisabled] = useState(false);



    function register(e) {
        setButtonValue(<ThreeDots type="ThreeDots" color="#FFFFFF" height={10} width={80} />);
        setButtonColor('#52B6FFB3');
        setDisabled(true);

        e.preventDefault();

        setTimeout(() => {
            const promisse = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', userData);
            promisse.then(() => navigate('/'));
            promisse.catch((error) => {
                alert('Falha ao cadastrar usuário.' + error.response.data.message);
                setButtonValue('Cadastrar');
                setDisabled(false);
                setButtonColor('#52B6FF');
            })
        }, 1500)
    }

    return (
        <Content>
            <div>
                <img src={logo} alt="Logo TrackIt" />
            </div>
            <Form onSubmit={register}>
                <input type="email" name="email" placeholder="email" disabled={disabled} required onChange={e => setEmail(e.target.value)} />
                <input type="password" name="senha" placeholder="senha" disabled={disabled} required onChange={e => setPassword(e.target.value)} />
                <input type="text" name="name" placeholder="nome" disabled={disabled} required onChange={e => setName(e.target.value)} />
                <input type="url" name="foto" placeholder="foto" disabled={disabled} required onChange={e => setImage(e.target.value)} />
                <Submit type="submit" value={buttonValue} buttonColor={buttonColor} disabled={disabled} />
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
`

const Submit = styled.input`
    background: ${props => props.buttonColor};
    border: none;
    color: #FFFFFF;
`