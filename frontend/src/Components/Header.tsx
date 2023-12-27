import { useNavigate } from "react-router-dom";

export const Header = () => {
    const navigate = useNavigate();
    return (
        <header className='header'>
        <h1 className="header-title" onClick={() => navigate('/')}>Where in the world?</h1>
        </header>
    )
}