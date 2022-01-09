import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ResetStyle } from '../styles/reset';
import { GlobalStyle } from '../styles/style';
import HabitsPage from './HabitsPage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';

export default function App() {
    return (
        <BrowserRouter>
            <ResetStyle />
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/cadastro" element={<RegisterPage />} />
                <Route path="/habitos" element={<HabitsPage />} />
            </Routes>
        </BrowserRouter>
    )
}