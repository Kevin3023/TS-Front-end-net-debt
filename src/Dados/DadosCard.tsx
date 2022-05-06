import { Divida } from "./types";

type Props = {
    divida: Divida;
}

function formatNumber(valor: number){
    const formatter = new Intl.NumberFormat('PT-br', {
        style: 'currency',
        currency: 'BRL'
    });
    
    return valor
}

function DadosCard({ divida }: Props) {
    return (
        <div className='order-card-container'>
            <h3 className="order-card-title">
                {divida.id}
            </h3>
            <h3 className="order-card-price">
                {formatNumber(divida.valor)}
            </h3>
            <div className="order-card-description">
                <h3>Data</h3>
                <p>
                {divida.data}
                </p>
            </div>
        </div>
    )
}

export default DadosCard;

