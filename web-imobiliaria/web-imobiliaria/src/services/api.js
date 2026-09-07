import axios from "axios";

export function listarImoveis(){
    return axios.get("http://localhost:8080/imoveis");
}

export function buscarImovelPorId(id) {
  return axios.get(`http://localhost:8080/imoveis/${id}`);
}

export function cadastrarImovel(imovel){
    return axios.post("http://localhost:8080/imoveis", imovel);
}

