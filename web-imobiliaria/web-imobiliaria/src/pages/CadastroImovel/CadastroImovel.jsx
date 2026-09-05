import { Link, useNavigate } from "react-router-dom";
import { cadastrarImovel } from "../../services/api";
import { useState } from "react";
import { FormCadastro } from "../../components/FormCadastro/FormCadastro"
import styles from "./CadastroImovel.module.css"
export function CadastroImovel() {

    function cadastrar(novoImovel) {
        return cadastrarImovel(novoImovel).then((resposta) => {
            console.log("Cadastrou: " + resposta);
            return resposta;
        }).catch((erro) => {
            console.log("Falhou: " + erro);
            throw erro;
        });
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Link to="/" className={styles.linkVoltar}>
                    ← Voltar
                </Link>
                <h1>Cadastrar Novo Imóvel</h1>
            </div>

            <FormCadastro onCadastrar={cadastrar} />
        </div>
    );
}