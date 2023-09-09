import { useState } from 'react';
import Content from '../components/Content';
import Header from '../components/Header';
import { Data } from '../types/Data';

function Home() {
  const [dataBase, setDataBase] = useState<Data[]>([]);

  function atualizarDataBase(novosDados: Data[]) {
    setDataBase(novosDados);
  }

  return (
    <>
      <Header atualizarDataBase={atualizarDataBase} />
      <Content dataBase={dataBase} />
    </>
  );
}

export default Home;
