
function StepsHeader(){
    return (
        <header className='orders-steps-container'>
            <div className='orders-steps-content'>
                <h1 className='steps-title'>
                    Setor Público <br/> Brasileiro
                </h1>
                <ul className='steps-items'>
                    <li>
                        <span className='steps-number'></span>
                        Abaixo estão listadas os registros da porcentagem da dívida do setor público brasileiro
                    </li>
                    <li>
                        <span className='steps-number'></span>
                        Os dados consintem basicamente em: <strong>DATA</strong> e <strong>valor</strong>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default StepsHeader;
