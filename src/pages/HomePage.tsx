import { Link } from "react-router-dom";
import '../styles/HomePage.css'

const HomePage = () =>{
    return (
        <>
            <div>
                <h1>DevBank</h1>
                <Link to="/CountPage">Conta</Link> {/*link para outras páginas */}
            </div>
            <br />
            <div>
                <input type="text" placeholder="Digite a URL da API" />
            </div>
        </>
    );
}

export default HomePage;
