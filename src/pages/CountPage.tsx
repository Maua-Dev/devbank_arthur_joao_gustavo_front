import React from 'react';
import Button from "./Button.css";
import withdrawButton from "..components/withdrawButton";
import { useEffect } from "react";

export default function CountPage() {

    const handleClick = () => {
        window.location.href = '/';
    };

    useEffect(() => {
            
    }, [])

    return(
        <div>
            <h1>DevBank</h1>
            <button onClick={handleClick}> Voltar para página inicial </button>
            <div>
            <h2>Saque</h2>
            <button onClick={handleClick}> Saque </button>
            <button onClick={handleClick}> Depósito </button>
            <button onClick={handleClick}> Transação </button>
            </div>
        </div>
    );
}