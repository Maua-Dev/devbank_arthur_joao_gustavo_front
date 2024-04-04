
import Button from "../components/Button";
import HomePage from "./HomePage";
import { Link } from "react-router-dom";
import '../styles/CountPage.css';

export default function CountPage() { 
    return(
        <>
            <Button />
            <h1>DevBank</h1>
            <Link to="/" >Voltar</Link>
        </>
    );
}