import DadosList from './DadosList';
import StepsHeader from './StepHeader';
import './styles.css';

function Dados() {
    return (
        <div className='orders-container'>
            <StepsHeader/>
            <DadosList/>
        </div>
    )
}

export default Dados;

