import axios from 'axios'
import { useEffect, useContext } from 'react';
import { DadosConta } from '../context/ApiContext';
import ButtonVoltarPagina from '@components/ButtonVoltarPagina';
import '../styles/TransitionsPage.css'

export default function TransitionsPage() {

  const { setName, setAgency, setAccount, setCurrent_Balance, name, agency, account, current_balance, api} = useContext(DadosConta) //pega todas as variaveis do contexto e tras para esta pagina para ser usada

    const ApiAccount = async () => {
        const response = await axios.get(api)
        setName(response.data.name) //mostra o nome
        setAgency(response.data.agency) //mostra a agencia
        setAccount(response.data.account) //mostra a conta
        setCurrent_Balance(response.data.current_balance) //mostra o saldo
    }

    useEffect(()=> { //dispara acao se ocorrer outra acao
        ApiAccount()
    }, []);

  return (
    <div>
        <header className='headerTransitions'>
            <h1><u>Histórico de Transações</u></h1>
            <ButtonVoltarPagina text='Voltar' to='/CountPage'/>
        </header>
        <div className='infoTransitions'>
            <div className='txtInfoTransitions'>
                <p>Nome: {name}</p>
                <br />
                <p>Agencia: {agency}</p>
                <br />
                <p>Conta: {account}</p>
                <br />
                <p>Saldo: {current_balance}</p>
            </div>
        </div>
        <div className='historyData'>
            Historico Vazio
        </div>
    </div>
  );
};