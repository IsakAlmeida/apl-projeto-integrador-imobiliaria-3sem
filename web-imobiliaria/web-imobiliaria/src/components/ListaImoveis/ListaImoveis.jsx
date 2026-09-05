import styles from './ListaImoveis.module.css';
import { CardImovel } from "../CardImovel/CardImovel";

export function ListaImoveis(props){
    return(
        <div className={styles.listaSection}>
            <h2>Imóveis Disponíveis</h2>

            {props.carregando && <p className={styles.carregando}>Carregando...</p>}

            <div className={styles.lista}>
                {props.imoveis.map(imovel => (
                <CardImovel imovel={imovel}></CardImovel>
            ))}

            {props.imoveis.length == 0 && !props.carregando && (<p>Nenhum imóvel cadastrado, clique em <b><a href='#' onClick={props.onBuscar}>Buscar todos os imóveis</a></b> para atualizar os imóveis</p>)}
            </div>
        </div>
    );
}