import React from 'react';
import { useEffect } from "react";
import { useNavigate, useNavigationType } from 'react-router-dom';
import axios from 'axios';
import '../styles/CountPage.css'

export default function CountPage() {
    const navigate = useNavigate()
    

    const api = axios.create({
        baseURL: 'https://r2tcz6zsokynb72jb6o4ffd5nm0ryfyz.lambda-url.us-west-2.on.aws/'
    });


    const handleClick = () => {
        navigate("/")
    };

    useEffect(() => {
            
    }, [])

    return(
        <div>
            <h1 className='txtDevBankCountPage'>DevBank</h1>
            <button onClick={handleClick}> Voltar para página inicial </button>
            <div>
                <h2>Saque</h2>
                <button onClick={handleClick}> Saque </button>
                <button onClick={handleClick}> Depósito </button>
                <button onClick={handleClick}> Transação </button>
            </div>
            <div className='infoCount'>
                <div className='txtInfoCount'>
                    <p>Nome:</p>
                    <br />
                    <p>Agencia:</p>
                    <br />
                    <p>Conta:</p>
                    <br />
                    <p>Saldo:</p>
                </div>
            </div>
        </div>
    );
}