import React from 'react';

const BotaoRedirecionamento = () => {
    const handleClick = () => {
        // Substitua '/outra-pagina' pelo URL da página para a qual deseja redirecionar
        window.location.href = '/';
    };

    return (
        <button onClick={handleClick}>
            <img src="#" alt="" /> {/* caso der pra colocar a foto*/}
             Ir para página inicial
        </button>
    );
};

export default BotaoRedirecionamento;
