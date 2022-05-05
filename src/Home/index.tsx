import './styles.css';
import MainImage from './main.jpeg';

function Home() {
    return (
        <div className='home-container'>
            <div className='home-content'>
                <div className='home-actions'>
                    <h1 className='home-title'>
                        Faça hoje os <br/> desafios que deixam <br/> você mais forte
                    </h1>
                    <h3 className='home-subtitle'>
                        IBM Brasil - Industria máquinas e serviços
                    </h3>
                    <a href='dados' className='home-btn-order'>
                        CONSULTAR DADOS
                    </a>
                </div>

            </div>
        </div>
    )
}

export default Home;

