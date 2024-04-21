import { useEffect, useContext } from 'react';
import { DadosConta } from '../context/ApiContext';
import  DevLogoIMG  from '@components/DevLogoIMG'
import ButtonVoltarPagina from '@components/ButtonVoltarPagina';
import axios from 'axios';
import Button from '../components/Button';
import money from '../assets/images/save-money.png'
import historic from '../assets/images/historic.png'
import deposit from '../assets/images/deposit.png'
import '../styles/CountPage.css'

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
                    <DevLogoIMG />
                    <ButtonVoltarPagina text='Voltar' to='/' />
                </div>
            </div>
            <div className='containerOpcoes'>
                <br />
                <hr className='hrTagCountPage'/>
                <h1 className='txtOpcoesCount'>Opções</h1>
                <hr className='hrTagCountPage'/>
                <br />
                <div className='saqueContainer'>
                    <strong className='txtPaginaSaque'>Saque</strong>
                    <img src={money} style={{width: 250, height: 250}} className='imgSaque' alt="SaquePNG" />
                    <div className="btnButtonLinkPage">
                        <Button text='Saque' to='/SaquePage' className='btnSaque'/>
                    </div>
                </div>
                <div className='depositContainer'>
                    <strong className='txtPaginaDeposito'>Depósito</strong>
                    <img src={deposit} style={{width: 250, height: 250}} className='imgDeposit' alt="DepositPNG" />
                    <div className="btnButtonLinkPage">
                        <Button text='Depósito' to='/DepositPage' className='btnDeposit'/>
                    </div>
                </div>
                <div className="transitionsContainer">
                    <strong className='txtPaginaHistoric'>Histórico</strong>
                    <img src={historic} style={{width: 250, height: 250}} className='imgHostoric' alt="HistoricoPNG" />
                    <div className="btnButtonLinkPage">
                        <Button text='Histórico' to='/TransitionsPage' className='btnHostoric'/>
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
