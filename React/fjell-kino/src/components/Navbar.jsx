import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function Navbar() {
    const { darkMode, setDarkMode } = useTheme();

    return (
        <nav className='navbar'>
            <h1>Fjell Kino</h1>
            <ul>
                <li><Link to='/'>Hjem</Link></li>
                <li><Link to='/movies'>Filmer</Link></li>
                <li><Link to='/upcoming'>Kommende filmer</Link></li>
                <li><Link to='/about'>Om oss</Link></li>
                <li><Link to='/contact'>Kontakt oss</Link></li>
            </ul>
            <button onClick={() => setDarkMode((prev) => !prev)}>
                {darkMode ? <FaSun /> : <FaMoon />}
            </button>
        </nav>
    );
}