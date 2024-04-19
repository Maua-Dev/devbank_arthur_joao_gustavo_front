import './styles.css'

type lessButtonProps = {
    numero: number;
}

const lessButton = ({numero}: lessButtonProps) => {
    const handleClick = () =>{
        numero -= numero
        console.log(numero)
    }
    return(
        <button onClick={handleClick}> - </button>
    )
}

export default lessButton