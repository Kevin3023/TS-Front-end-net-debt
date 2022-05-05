import './styles.css';
import Logo from './ibm-logo.png';
import { Link } from 'react-router-dom';

function Navbar(){
    return (
        <nav className="main-navbar">
            <div className='div-img'>
                <img className='img' src={Logo} alt="Logo_IBM"/>
                <Link to='/' className='logo-text'>Desafio Public Sector Net Debt IBM</Link> 
            </div>
            
        </nav>
    )
}

export default Navbar;

