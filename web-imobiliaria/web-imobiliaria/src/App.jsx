import styles from './App.module.css'
import { Funcionalidade } from './components/Header/Funcionalidade';
import { ListaImoveis } from './components/ListaImoveis/ListaImoveis'
import { listarImoveis, cadastrarImovel } from './services/api'
import { useState } from 'react';

function App() {
  const [imoveis, setImoveis] = useState([]);
  const [carregando, setCarregando] = useState(false);

  function buscarDados() {
    setCarregando(true);

    listarImoveis().then((resposta) => {
      setImoveis(resposta.data);
    }).catch((erro) => {
      console.log("Não foi possível buscar os imóveis:", erro);
    }).finally(() => {
      setCarregando(false);
    });
  }

  function cadastrarImovel() {

  }

  return (
    <div className={styles.app}>
      <div className={styles.titulo}>
        <h1>Sistema Imobiliário</h1>
      </div>
      <div className={styles.header}>
        <Funcionalidade onFuncao={buscarDados} >Buscar todos imóveis</Funcionalidade>
        <Funcionalidade onFuncao={cadastrarImovel}>Cadastrar imóvel</Funcionalidade>
      </div>
      <ListaImoveis imoveis={imoveis} carregando={carregando} onBuscar={buscarDados}/>
    </div>
  )
}

export default App
