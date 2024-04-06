import { Link } from 'react-router-dom';
import './Button.css'

type ButtonProps = {
    to: string;
    text: string;
};

const Button = ({ to, text }: ButtonProps) => {
    return (
        <Link to={to}>
            <button>{text}</button>
        </Link>
    );
};

export default Button;