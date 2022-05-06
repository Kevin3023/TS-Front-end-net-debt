import { useEffect, useState } from 'react';
import { fetchDividas } from '../api';
import DadosList from './DadosList';
import StepsHeader from './StepHeader';
import './styles.css';
import { Divida } from './types';

function Dados() {
    const [dividas, setDividas] = useState<Divida[]>([]);

    useEffect(() => {
        fetchDividas()
            .then(response => setDividas(response.data))
            .catch(error => console.log(error))
    }, []);


    return (
        <div className='orders-container'>
            <StepsHeader/>
            <DadosList dividas={dividas}/>
        </div>
    )
}

export default Dados;

