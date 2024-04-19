import { Link } from 'react-router-dom'
import './styles.css'

type ButtonProps = {
    to: string;
    text: string;
    className?: string; 
};

const Button = ({ to, text, className }: ButtonProps) => {
    return (
        <Link to={to}>
            <button className={className}><strong>{text}</strong></button>
        </Link>
    );
};

export default Button;