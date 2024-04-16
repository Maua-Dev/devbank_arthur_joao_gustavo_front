import '../components/sumButton.css'

type sumButtonProps = {
    numero: string;
}

const sumButton = ({numero}: sumButtonProps) => {
    const handleClick = () =>{
        numero += numero
        console.log(numero)
    }
    return(
        <button onClick={handleClick}> {numero} </button>
    )
}

export default sumButton