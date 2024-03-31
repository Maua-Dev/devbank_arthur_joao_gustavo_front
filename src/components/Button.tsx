import React from 'react';
import CountPage from '../pages/CountPage';
import { Link } from 'react-router-dom';

const Button = () => {
    return(
        <>
        <button>
            <Link to={"/CountPage"}>Conta</Link>
            
        </button>
        </> 
    )
}

export default Button