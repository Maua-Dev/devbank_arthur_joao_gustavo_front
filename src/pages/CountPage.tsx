import { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '../components/Button';
import '../styles/CountPage.css';

export default function CountPage() {

    const [accountData, setAccountData] = useState({
        name: '',
        agency: '',
        account: '',
        current_balance: 0
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://r2tcz6zsokynb72jb6o4ffd5nm0ryfyz.lambda-url.us-west-2.on.aws/');
                setAccountData(response.data);
                console.log(response)
            } catch (error) {
                console.error('Erro Status:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <div className="container">
                <div className='header'> 
                    <h1>DevBank</h1>
                    <img src='..assets/images/devlogo.png'></img>
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
                    <img src='../assets/images/save-money.png' alt="SaquePNG" />
                    <div className="btnButtonLinkPage">
                        <Button text='Saque' to='/SaquePage' />
                    </div>
                </div>
                <div className='depositContainer'>
                    <img src='../assets/images/deposit.png' alt="DepositPNG" />
                    <div className="btnButtonLinkPage">
                        <Button text='Depósito' to='/DepositPage' />
                    </div>
                </div>
                <div className="transitionsContainer">
                    <img src='../assets/images/historic.png' alt="HistoricoPNG" />
                    <div className="btnButtonLinkPage">
                        <Button text='Histórico' to='/TransitionsPage' />
                    </div>
                </div>
            </div>
            <div className='infoCount'>
                <div className='txtInfoCount'>
                    <p>Nome: {accountData.name}</p>
                    <br />
                    <p>Agencia: {accountData.agency}</p>
                    <br />
                    <p>Conta: {accountData.account}</p>
                    <br />
                    <p>Saldo: {accountData.current_balance}</p>
                </div>
            </div>
        </div>
    );
}
