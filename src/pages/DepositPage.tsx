import { DadosConta } from '../context/ApiContext';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import ButtonVoltarPagina from '@components/ButtonVoltarPagina';
import ContainerConta from '@components/ContainersConta';
import '../styles/Depositpage.css';

function DepositPage() {
  const [doisReais, setDoisReais] = useState(0);
  const [cincoReais, setCincoReais] = useState(0);
  const [dezReais, setDezReais] = useState(0);
  const [vinteReais, setVinteReais] = useState(0);
  const [cinquentaReais, setCinquentaReais] = useState(0);
  const [cemReais, setCemReais] = useState(0);
  const [duzentosReais, setDuzentosReais] = useState(0);

  const { setName, setAgency, setAccount, setCurrent_Balance, name, agency, account, current_balance, api } = useContext(DadosConta);


  const ApiAccount = async () => {
    const response = await axios.get(api);
    setName(response.data.name); // mostra o nome
    setAgency(response.data.agency); // mostra a agencia
    setAccount(response.data.account); // mostra a conta
    setCurrent_Balance(response.data.current_balance); // mostra o saldo
  };

  const depositar = async () => {
    const resp = await axios.post(api + '/deposit', {
      "2": doisReais,
      "5": cincoReais,
      "10": dezReais,
      "20": vinteReais,
      "50": cinquentaReais,
      "100": cemReais,
      "200": duzentosReais
    });
    setCurrent_Balance(resp.data.current_balance); // alteracao do saldo ocorre aqui
  };

  useEffect(() => {
    ApiAccount();
  }, []);

  return (
    <div className='ContainierDeposito'>
      <ButtonVoltarPagina className='btnVoltarPaginaSaque' text='Voltar' to='/CountPage' />
      <div className='ContainerDepositos'>
        <div className='ContainersMeioDeposito'>
          <ContainerConta number={2} valor={doisReais} setValor={setDoisReais} />
          <ContainerConta number={10} valor={dezReais} setValor={setDezReais} />
          <ContainerConta number={100} valor={cemReais} setValor={setCemReais} />
        </div>
        <div className='ContainersEsquerdaDeposito'>
          <ContainerConta number={5} valor={cincoReais} setValor={setCincoReais} />
          <ContainerConta number={50} valor={cinquentaReais} setValor={setCinquentaReais} />
        </div>
        <div className='ContainerDireitaDeposito'>
          <ContainerConta number={20} valor={vinteReais} setValor={setVinteReais} />
          <ContainerConta number={200} valor={duzentosReais} setValor={setDuzentosReais} />
        </div>
      </div>
      <div className='infoDepositoPage'>
        <div className='txtDepositoPage'>
          <p>Nome: {name}</p>
          <br />
          <p>Agencia: {agency}</p>
          <br />
          <p>Conta: {account}</p>
          <br />
          <p>Saldo: {current_balance}</p>
        </div>
      </div>
      <button className="btnSacar" onClick={depositar}>depositar</button>
    </div>
  );
}

export default DepositPage;
