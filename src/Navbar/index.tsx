import './styles.css';
import Logo from './ibm-logo.png';

function Navbar(){
    return (
        <nav className="main-navbar">
            <div className='div-img'>
                <img className='img' src={Logo} alt="Logo_IBM"/>
                <a href='home' className='logo-text'>Desafio Public Sector Net Debt IBM</a> 
            </div>
            
        </nav>
    )
}

export default Navbar;

