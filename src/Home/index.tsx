import './styles.css';
import MainImage from './main.jpeg';
import Footer from '../Footer';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <div className='home-container'>
                <div className='home-content'>
                    <div className='home-actions'>
                        <h1 className='home-title'>
                            Faça hoje os <br /> desafios que deixam <br /> você mais forte
                        </h1>
                        <h3 className='home-subtitle'>
                            IBM Brasil - Industria máquinas e serviços
                        </h3>
                        <Link to='/dados' className='home-btn-order'>
                            CONSULTAR DADOS
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home;

