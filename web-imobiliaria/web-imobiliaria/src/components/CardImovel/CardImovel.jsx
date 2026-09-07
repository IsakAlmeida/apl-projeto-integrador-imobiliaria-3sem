import styles from './CardImovel.module.css';
import { Link } from 'react-router-dom';

export function CardImovel(props) {
    return (
        <div className={styles.card}>
            <h3>{props.imovel.titulo}</h3>
            <p className={styles.campo}>
                <b>Preço: </b> R$ {props.imovel.preco.toLocaleString("pt-BR")}
            </p>
            <p className={styles.campo}>
                <b>Endereço: </b> {props.imovel.endereco}
            </p>
            <p className={styles.campo}>
                <b>Área: </b> {props.imovel.area} metros quadrados
            </p>
            <p className={styles.campo}>
                <b>Quartos:</b> {props.imovel.quartos}
            </p>
            <p className={styles.campo}>
                <b>Banheiros:</b> {props.imovel.banheiros}
            </p>
            <p className={styles.campo}>
                <b>Garagens:</b> {props.imovel.garagens}
            </p>
            <p className={styles.campo}>
                <b>Tipo:</b> {props.imovel.nome}
            </p>
            <p className={styles.descricao}>{props.imovel.descricao}</p>

        </div>
    )
}