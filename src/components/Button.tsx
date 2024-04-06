import './Button.css';

const BotaoRedirecionamento = () => {
    const handleClick = () => {
        window.location.href = '/';
    };
    return (
        <button onClick={handleClick}>
            <img src="#" alt="" /> {/* caso der pra colocar a foto*/}
             Voltar para página inicial
        </button>
    );
};

export default BotaoRedirecionamento;
