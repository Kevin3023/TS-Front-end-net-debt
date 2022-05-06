import DadosCard from "./DadosCard";
import { Divida } from "./types";

type Props = {
    dividas: Divida[]
}

function DadosList({ dividas }: Props) {

    return (
        <div className='orders-list-container'>
            <div className="orders-list-items">
                {dividas.map(divida => (
                    <DadosCard key={divida.id} divida={divida}/>
                ))}
            </div>
        </div>
    )
}

export default DadosList;

