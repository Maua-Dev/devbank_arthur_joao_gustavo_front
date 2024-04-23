import './styles.css'

type ContainerContaProps = {
    number: number, //tera o valor a mostra
    valor: number, 
    setValor: React.Dispatch<React.SetStateAction<number>>
    className?: string
}

export default function ContainerConta({ number, valor, setValor, className }: ContainerContaProps) {
    return(
        <div className="ContainerConta">
            <h1 className={className}>{number}R$</h1>
            <div className="buttonsMinus-Sum">
                <button className={className} onClick={() => setValor(valor === 0 ? 0 : valor - 1)} >-</button>
                <button className={className} onClick={() => setValor(valor + 1)}>+</button>
            </div>
            <span className='txtReaisSaquePage'>Cédulas: {valor}</span>
        </div>
    );
};