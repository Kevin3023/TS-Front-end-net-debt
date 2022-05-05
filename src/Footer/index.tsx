import './styles.css';
import Linkedin from './linkedin.png';

function Footer() {
    return (
        <footer className='main-footer'>
            App desenvolvido por Kevin B. Gomes durante o tempo de estágio na IBM Brasil.
            <div className='footer-icons'>
                <a href='https://www.linkedin.com/in/kevin-gomes-0616061bb/' target="_new">
                    <img src={Linkedin} alt="Linkedin_logo"/>
                </a>
            </div>
        </footer>
    )

}

export default Footer;

