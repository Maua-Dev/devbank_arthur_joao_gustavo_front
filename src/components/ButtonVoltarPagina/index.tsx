import { Link } from 'react-router-dom';
import './styles.css'

type ButtonProps = {
    to: string;
    text: string;
    className?: string;
};

const ButtonVoltarPagina = ({ to, text, className }: ButtonProps) => {
    return (
        <Link to={to} className={className}>
            <button className="btnVoltarPagina"><strong>{text}</strong></button>
        </Link>
    );
};

export default ButtonVoltarPagina;