import { useState } from "react";
import { Link } from "react-router-dom";
import { buscarImovelPorId } from "../../services/api";
import styles from "./BuscarImovel.module.css";

export function BuscarImovel() {
  const [idBusca, setIdBusca] = useState("");
  const [imovel, setImovel] = useState(null);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState("");

  function onBuscar() {
    if (!idBusca) {
      setErro("Digite o ID do imóvel");
      return;
    }

    setCarregando(true);
    setErro("");
    setImovel(null);

    buscarImovelPorId(idBusca)
      .then((resposta) => {
        setImovel(resposta.data);
      })
      .catch((erro) => {
        console.log("Erro ao buscar:", erro);
        setErro("Imóvel não encontrado");
      })
      .finally(() => {
        setCarregando(false);
      });
  }

  function onLimpar() {
    setIdBusca("");
    setImovel(null);
    setErro("");
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link to="/" className={styles.linkVoltar}>← Voltar</Link>
        <h1>Buscar Imóvel</h1>
      </div>

      <div className={styles.busca}>
        <h2>Buscar por ID</h2> <br />

        <div className={styles.grupoInput}>
          <input
            className={styles.input}
            type="number"
            placeholder="Digite o ID do imóvel"
            value={idBusca}
            onChange={(evento) => setIdBusca(evento.target.value)}
          />
        </div>

        <div className={styles.botoes}>
          <button className={styles.buttonBuscar} onClick={onBuscar}>{carregando ? "Buscando..." : "Buscar"}</button>
          <button className={styles.buttonLimpar} onClick={onLimpar}>Limpar</button>
        </div>

        {erro && <p className={styles.erro}>{erro}</p>}
      </div>

      {imovel && (
        <div className={styles.resultado}>
          <h2>Resultado da Busca</h2> <br />

          <div className={styles.imovelCard}>
            <h3>{imovel.titulo}</h3>

            <p><strong>ID:</strong> {imovel.id}</p>

            <p><strong>Preço:</strong> R$ {imovel.preco?.toLocaleString("pt-BR")}</p>

            <p><strong>Endereço:</strong> {imovel.endereco}</p>

            <p><strong>Área:</strong> {imovel.area}m²</p>

            <p><strong>Quartos:</strong> {imovel.quartos}</p>

            <p><strong>Banheiros:</strong> {imovel.banheiros}</p>

            <p><strong>Garagens:</strong> {imovel.garagens}</p>

            <p><strong>Tipo:</strong> {imovel.nome}</p>

            <div className={styles.descricao}>
              <p>
                <strong>Descrição:</strong>
              </p>
              <p>{imovel.descricao}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}