import { useState } from 'react';
import styles from './FormCadastro.module.css';
import { useNavigate } from "react-router-dom";

export function FormCadastro(props) {
  const [titulo, setTitulo] = useState("");
  const [preco, setPreco] = useState("");
  const [endereco, setEndereco] = useState("");
  const [area, setArea] = useState("");
  const [quartos, setQuartos] = useState(0);
  const [banheiros, setBanheiros] = useState(0);
  const [garagens, setGaragens] = useState(0);
  const [tipo, setTipo] = useState(1);
  const [descricao, setDescricao] = useState("");
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");
  const navigate = useNavigate();

  function cadastrar() {
    setSucesso("");
    setErro("");

    const novoImovel = {
      titulo: titulo,
      preco: parseFloat(preco),
      endereco: endereco,
      area: parseFloat(area),
      quartos: parseInt(quartos),
      banheiros: parseInt(banheiros),
      garagens: parseInt(garagens),
      tipo: {
        id: parseInt(tipo)
      },
      descricao: descricao
    };

    props.onCadastrar(novoImovel).then(() => {
      setSucesso("Imóvel cadastrado com sucesso!");
      setTitulo("");
      setPreco("");
      setEndereco("");
      setArea("");
      setQuartos(0);
      setBanheiros(0);
      setGaragens(0);
      setTipo(1);
      setDescricao("");

      setTimeout(() => {
        navigate("/")
      }, 2000);
    }
    ).catch((erro) => {
      const mensagem = erro.response?.data;
      setErro(mensagem);
      console.log(mensagem);
    })
  }

  return (
    <div className={styles.formulario}>
      <h2>Novo Imóvel</h2>

      {erro && <p className={styles.erroMensagem}>{erro}</p>}
      {sucesso && <p className={styles.sucessoMensagem}>{sucesso}</p>}

      <div className={styles.grupoInput}>
        <label>Titulo: </label>
        <input className={styles.input} value={titulo} onChange={(evento) => setTitulo(evento.target.value)} />
      </div>

      <div className={styles.grupoInput}>
        <label>Preço: </label>
        <input className={styles.input} type="number" value={preco} onChange={(evento) => setPreco(evento.target.value)} />
      </div>

      <div className={styles.grupoInput}>
        <label>Endereço:</label>
        <input className={styles.input} value={endereco} onChange={(evento) => setEndereco(evento.target.value)} />
      </div>

      <div className={styles.grupoInput}>
        <label>Área (m²):</label>
        <input className={styles.input} type="number" value={area} onChange={(evento) => setArea(evento.target.value)} />
      </div>

      <div className={styles.grupoInput}>
        <label>Quartos:</label>
        <input className={styles.input} type="number" value={quartos} onChange={(evento) => setQuartos(evento.target.value)} />
      </div>

      <div className={styles.grupoInput}>
        <label>Banheiros:</label>
        <input className={styles.input} type="number" value={banheiros} onChange={(evento) => setBanheiros(evento.target.value)} />
      </div>

      <div className={styles.grupoInput}>
        <label>Garagens:</label>
        <input className={styles.input} type="number" value={garagens} onChange={(evento) => setGaragens(evento.target.value)} />
      </div>

      <div className={styles.grupoInput}>
        <label>Tipo:</label>
        <select className={styles.select} value={tipo} onChange={(evento) => setTipo(evento.target.value)}>
          <option value="1">Apartamento</option>
          <option value="2">Casa</option>
          <option value="3">Comercial</option>
          <option value="4">Terreno</option>
          <option value="5">Sala</option>
        </select>
      </div>

      <div className={styles.grupoInput}>
        <label>Descrição:</label>
        <textarea className={styles.textarea} value={descricao} onChange={(evento) => setDescricao(evento.target.value)} />
      </div>

      <button className={styles.button} onClick={cadastrar}>Cadastrar</button>
    </div>
  )
}
