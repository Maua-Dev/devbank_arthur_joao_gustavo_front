import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/HomePage.css'

const HomePage = () =>{

        const [api, setApi] = useState<string>("")
        const navigate = useNavigate() 


        useEffect(() => {
            
        }, [])

        const testeApi = () =>{
            if (api == 'https://r2tcz6zsokynb72jb6o4ffd5nm0ryfyz.lambda-url.us-west-2.on.aws/'){
                navigate("/CountPage")
            }
            else{
                navigate("/ErrorPage")
            }
        }
        
        return(
            <>
                <div>
                    <img src="src/assets/images/devlogo.png" alt="devlogo" className="imgDevBank"/>
                    <Link to="/CountPage">Conta</Link> {/*link para outras páginas */}
                </div>
                <br />
                <div>
                    <input type="text" placeholder="Digite a URL da API" onChange={(event) => setApi(event.target.value)} className="inputAPI" />
                    <button onClick={testeApi} className="btnAcessar">Acessar</button>
                </div>
            </>
        );
    }

export default HomePage;


