import './styles.css'

type sumButtonProps = {
    numero: string;
}

const sumButton = ({numero}:sumButtonProps) => {
    const handleClick = () =>{
        numero += numero
        console.log(numero)
    }
    return(
        <button onClick={handleClick}> + </button>
    )
}

export default sumButton