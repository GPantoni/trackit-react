import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import TodayPage from './TodayPage';
import HabitsPage from './HabitsPage';
import HistoryPage from './HistoryPage';

import { ResetStyle } from '../styles/reset';
import { GlobalStyle } from '../styles/style';

export default function App() {
    const tokenOnLocalStorage = localStorage.getItem('token');

    const userImageOnLocalStorage = localStorage.getItem('userImage');

    const [token, setToken] = useState(tokenOnLocalStorage);

    const [userImage, setUserImage] = useState(userImageOnLocalStorage);

    function setAndPersistToken(token, userImage) {
        setToken(token);
        setUserImage(userImage);
        localStorage.setItem("token", token);
        localStorage.setItem("userImage", userImage);
    }

    return (
        <UserContext.Provider value={{ token, setToken, setAndPersistToken, userImage, setUserImage }}>
            <BrowserRouter>
                <ResetStyle />
                <GlobalStyle />
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/cadastro" element={<RegisterPage />} />
                    <Route path="/habitos" element={<HabitsPage />} />
                    <Route path="/hoje" element={<TodayPage />} />
                    <Route path="/historico" element={<HistoryPage />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
}