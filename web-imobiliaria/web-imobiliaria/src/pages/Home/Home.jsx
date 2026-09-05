import { Link } from "react-router-dom";
import { ListaImoveis } from "../../components/ListaImoveis/ListaImoveis";
import { useState } from "react";
import { listarImoveis } from "../../services/api";
import {Funcionalidade} from "../../components/Header/Funcionalidade"
import styles from "./Home.module.css";

export function Home(){
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

  return (
    <div className={styles.home}>
      <div className={styles.titulo}>
        <h1>Sistema Imobiliário</h1>
      </div>
      <div className={styles.header}>
        <Funcionalidade onFuncao={buscarDados} >Buscar todos imóveis</Funcionalidade>
        <Link to="/cadastro"><Funcionalidade>Cadastrar imóvel</Funcionalidade></Link>
      </div>
      <ListaImoveis imoveis={imoveis} carregando={carregando} onBuscar={buscarDados}/>
    </div>
  )
}