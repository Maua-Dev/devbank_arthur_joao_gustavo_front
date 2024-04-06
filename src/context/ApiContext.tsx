import React, { createContext, useState, useEffect } from 'react';

interface MyApiData{
  name: string
  agency: number
  account: string
  current_balance: number
}

const MyDataContext = createContext<MyApiData | null>(null); //usado para compartilhar dados entre componentes. <MyApiData | null> -> pode ser null ou MyApiData

const ApiContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => { //responsavel por fornecer dados da API para componentes filhos
  const [apiData, setApiData] = useState<MyApiData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://r2tcz6zsokynb72jb6o4ffd5nm0ryfyz.lambda-url.us-west-2.on.aws'); //await pois é uma requisicao http
        const data = await response.json(); //response.json pois devolve um json para gente 
        setApiData(data);
      } 
      catch (error) {
        console.error('Status Erro:', error);
      }
      
    };

    fetchData();
  }, []);

  return (
    <MyDataContext.Provider value={apiData}>
      {children}
    </MyDataContext.Provider>
  );
};

export { MyDataContext, ApiContextProvider };