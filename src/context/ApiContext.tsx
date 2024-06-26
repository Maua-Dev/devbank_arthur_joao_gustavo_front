import { ReactNode, createContext, useState } from "react"
//ReactNode - aceita qualquer tipo de conteúdo renderizavel

//estrutura dos dados esperado
type DadosInfoCount= {
  name: string,
  agency: string,
  account: string,
  current_balance: number,
  api: string,
  
  //funcoes que aceitam uma acao para atualizar o estado de cada variavel escrita 
  setName: React.Dispatch<React.SetStateAction<string>>,
  setAgency: React.Dispatch<React.SetStateAction<string>>,
  setAccount: React.Dispatch<React.SetStateAction<string>>,
  setCurrent_Balance: React.Dispatch<React.SetStateAction<number>>,
  setApi: React.Dispatch<React.SetStateAction<string>>,
}

//contexto com valores vazios para seres recebidos 
const defaultDadosInfoCount : DadosInfoCount = {
  name: "",
  agency: "",
  account: "",
  current_balance: 0,
  api: "",
  
  setName: ()=> {},
  setAgency: ()=> {},
  setAccount: ()=> {},
  setCurrent_Balance: ()=> {},
  setApi: ()=> {},
}

export const DadosConta = createContext<DadosInfoCount>(defaultDadosInfoCount); //criação do contexto

export const APIDados = ({children} : {children: ReactNode }) => {
    
  const [name, setName] = useState<string>("")
  const [agency, setAgency] = useState<string>("")
  const [account, setAccount] = useState<string>("")
  const [current_balance, setCurrent_Balance] = useState<number>(0)
  const [api, setApi] = useState<string>("");
  
  return (
    <DadosConta.Provider value = {{name, agency, account, current_balance, setName, setAgency, setAccount, setCurrent_Balance, api, setApi
    }}>
    {children} {/*contexto funcionando */}
    </DadosConta.Provider>

  );
};
