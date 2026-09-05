import styles from './Funcionalidade.module.css'

export function Funcionalidade(props){
    return (
        <button onClick={props.onFuncao} className={styles.buttonFunc}>{props.children}</button>
    );
}