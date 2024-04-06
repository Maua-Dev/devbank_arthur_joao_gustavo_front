import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/CountPage.css';
import Button from '../components/Button';

export default function CountPage() {
    const navigate = useNavigate();
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
            <h1 className='txtDevBankCountPage'>DevBank</h1>
            <Button text='Pagina Inicial' to='/'/>
            <div>
                <h1>Opções</h1>
                <Button text='Saque' to='/SaquePage'/>
                <Button text='Depósito' to='/DepositPage'/>
                <Button text='Transições' to='/TransitionsPage'/>
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
