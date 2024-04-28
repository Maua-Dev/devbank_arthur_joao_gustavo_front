import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DadosConta } from "../context/ApiContext";
import DevLogoPreto from '@assets/images/DevImgPreto.png'
import '../styles/HomePage.css'

const HomePage = () =>{

        const { api, setApi} = useContext(DadosConta)
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
                    <img src={DevLogoPreto} alt="devlogo" className="imgDevBank"/>
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


