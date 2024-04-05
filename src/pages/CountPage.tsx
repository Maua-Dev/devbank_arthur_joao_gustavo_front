
import Button from "../components/Button";
import HomePage from "./HomePage";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import '../styles/CountPage.css';

export default function CountPage() { 


    useEffect(() => {
            
    }, [])

    return(
        <div className="countPage" >
            <Button />
            <h1>DevBank</h1>
        </div>
    );
}