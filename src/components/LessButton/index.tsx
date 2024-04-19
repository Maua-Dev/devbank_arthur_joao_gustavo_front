import './styles.css'

type lessButtonProps = {
    numero: string;
}

const lessButton = ({numero}: lessButtonProps) => {
    const handleClick = () =>{
        numero += numero
        console.log(numero)
    }
    return(
        <button onClick={handleClick}> {numero} </button>
    )
}

export default lessButton