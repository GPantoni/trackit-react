import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import UserContext from '../contexts/UserContext';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import HabitsPage from './HabitsPage';

import { ResetStyle } from '../styles/reset';
import { GlobalStyle } from '../styles/style';

export default function App() {
    return (
        // <UserContext.Provider>
        <BrowserRouter>
            <ResetStyle />
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/cadastro" element={<RegisterPage />} />
                <Route path="/habitos" element={<HabitsPage />} />
            </Routes>
        </BrowserRouter>
        // </UserContext.Provider>
    )
}