import React from 'react';
import './Button.css'

const BotaoRedirecionamento = () => {
    const handleClick = () => {
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
