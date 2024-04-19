import { useEffect, useContext } from 'react';
import { DadosConta } from '../context/ApiContext';
import axios from 'axios';
import Button from '../components/Button';
import '../styles/CountPage.css';
import money from '../assets/images/save-money.png'
import historic from '../assets/images/historic.png'
import deposit from '../assets/images/deposit.png'
import devlogo from '../assets/images/devlogo.png'

export default function CountPage() {
        const { setName, setAgency, setAccount, setCurrent_Balance, name, agency, account, current_balance} = useContext(DadosConta) //pega todas as variaveis do contexto e tras para esta pagina para ser usada

    const ApiAccount = async () => {
        const api = 'https://r2tcz6zsokynb72jb6o4ffd5nm0ryfyz.lambda-url.us-west-2.on.aws/' //n sei se ta certo estar neste lugar
        const response = await axios.get(api)
        setName(response.data.name) //mostra o nome
        setAgency(response.data.agency) //mostra a agencia
        setAccount(response.data.account) //mostra a conta
        setCurrent_Balance(response.data.current_balance) //mostra o saldo
    }

    useEffect(()=> { //dispara acao se ocorrer outra acao
        ApiAccount()
    }, [])

    return (
        <div>
            <div className="container">
                <div className='header'> 
                    <img src={devlogo}></img>
                </div>
                <div className='btnVoltar'>
                    <Button text='Pagina Inicial' to='/' />
                </div>
            </div>
            <div>
                <br></br>
                <h1>Opções</h1>
                <br></br>
                <div className='saqueContainer'>
                    <img src={money} style={{width: 250, height: 250}}  alt="SaquePNG" />
                    <div className="btnButtonLinkPage">
                        <Button text='Saque' to='/SaquePage' />
                    </div>
                </div>
                <div className='depositContainer'>
                    <img src={deposit} style={{width: 250, height: 250}} alt="DepositPNG" />
                    <div className="btnButtonLinkPage">
                        <Button text='Depósito' to='/DepositPage' />
                    </div>
                </div>
                <div className="transitionsContainer">
                    <img src={historic} style={{width: 250, height: 250}} alt="HistoricoPNG" />
                    <div className="btnButtonLinkPage">
                        <Button text='Histórico' to='/TransitionsPage' />
                    </div>
                </div>
            </div>
            <div className='infoCount'>
                <div className='txtInfoCount'>
                    <p>Nome: {name}</p>
                    <br />
                    <p>Agencia: {agency}</p>
                    <br />
                    <p>Conta: {account}</p>
                    <br />
                    <p>Saldo: {current_balance}</p>
                </div>
            </div>
        </div>
    );
}
