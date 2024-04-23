import { DadosConta } from '../context/ApiContext';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import ButtonVoltarPagina from '@components/ButtonVoltarPagina';
import ContainerConta from '@components/ContainersConta';
import devLogo from '../assets/images/DevImgPreto.png'
import '../styles/SaquePage.css'

function SaquePage() {
    const [doisReais, setDoisReais] = useState(0)
    const [cincoReais, setCincoReais] = useState(0)
    const [dezReais, setDezReais] = useState(0)
    const [vinteReais, setVinteReais] = useState(0)
    const [cinquentaReais, setCinquentaReais] = useState(0)
    const [cemReais, setCemReais] = useState(0)
    const [duzentosReais, setDuzentosReais] = useState(0)

  const { setName, setAgency, setAccount, setCurrent_Balance, name, agency, account, current_balance, api} = useContext(DadosConta)


  const ApiAccount = async () => {
    const response = await axios.get(api)
    setName(response.data.name) //mostra o nome
    setAgency(response.data.agency) //mostra a agencia
    setAccount(response.data.account) //mostra a conta
    setCurrent_Balance(response.data.current_balance) //mostra o saldo
  }

  const sacar = async() => {
    const resp = await axios.post(api + '/withdraw',{
        "2": doisReais,
        "5": cincoReais,
        "10": dezReais,
        "20": vinteReais,
        "50": cinquentaReais,
        "100": cemReais,
        "200": duzentosReais
    })
    setCurrent_Balance(resp.data.current_balance) // alteracao do saldo ocorre aqui
    setDoisReais(0)
    setCincoReais(0)
    setDezReais(0)
    setVinteReais(0)
    setCinquentaReais(0)
    setCemReais(0)
    setDuzentosReais(0)
  }

  useEffect(() => {
    ApiAccount()
  }, [])

  return (

    <div className='ContainerSaquePage'>
      <h1 className='h1tagSaquePage'><u>Tela Saque</u></h1>
      <img src={devLogo} alt="devlogo" className='imgDevLogoPreto'/>
      <ButtonVoltarPagina className='btnVoltarPaginaSaque' text='Voltar' to='/CountPage'/>
      {/* pegar imagem "depositar" */}
      <div className='containerSaques'>
        <div className='ContainersMeioSaque'>
          <ContainerConta className='txtDoisReais' number={2} valor={doisReais} setValor={setDoisReais}/>
          <ContainerConta className='txtDezReais' number={10} valor={dezReais} setValor={setDezReais}/>
          <ContainerConta className='txtCemReais' number={100} valor={cemReais} setValor={setCemReais}/>
        </div>
        <div className='ContainersEsquerdaSaque'>
          <ContainerConta className='txtCincoReais' number={5} valor={cincoReais} setValor={setCincoReais}/>
          <ContainerConta className='txtCinquentaReais' number={50} valor={cinquentaReais} setValor={setCinquentaReais}/>
        </div>
        <div className='ContainerDireitaSaque'>
          <ContainerConta className='txtVinteReais' number={20} valor={vinteReais} setValor={setVinteReais}/>
          <ContainerConta className='txtDuzentosReais' number={200} valor={duzentosReais} setValor={setDuzentosReais}/>
        </div>
      </div>

      <div className='infoSaquePage'>
        <div className='txtSaquePage'>
          <p>Nome: {name}</p>
          <br />
          <p>Agencia: {agency}</p>
          <br />
          <p>Conta: {account}</p>
          <br />
          <p>Saldo: {current_balance}</p>
        </div>
      </div>
      <button className="btnSacar" onClick={sacar}>Sacar</button>
    </div>
  );
}

export default SaquePage;