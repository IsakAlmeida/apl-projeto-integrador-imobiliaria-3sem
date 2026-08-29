package school.sptech.api_imobiliaria.model;

import java.time.LocalDateTime;

public class Imovel {
    private Integer id;
    private String titulo;
    private String descricao;
    private Double preco;
    private String endereco;
    private Double area;
    private Integer quartos;
    private Integer banheiros;
    private Integer garagens;
    private TipoImovel tipo;
    private LocalDateTime dataCadastro;

    public Imovel() {
    }

    public Imovel(String titulo, String descricao, Double preco, String endereco, Double area,
                  Integer quartos, Integer banheiros, Integer garagens, TipoImovel tipo) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.preco = preco;
        this.endereco = endereco;
        this.area = area;
        this.quartos = quartos;
        this.banheiros = banheiros;
        this.garagens = garagens;
        this.tipo = tipo;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Double getPreco() {
        return preco;
    }

    public void setPreco(Double preco) {
        this.preco = preco;
    }

    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public Double getArea() {
        return area;
    }

    public void setArea(Double area) {
        this.area = area;
    }

    public Integer getQuartos() {
        return quartos;
    }

    public void setQuartos(Integer quartos) {
        this.quartos = quartos;
    }

    public Integer getBanheiros() {
        return banheiros;
    }

    public void setBanheiros(Integer banheiros) {
        this.banheiros = banheiros;
    }

    public Integer getGaragens() {
        return garagens;
    }

    public void setGaragens(Integer garagens) {
        this.garagens = garagens;
    }

    public TipoImovel getTipo() {
        return tipo;
    }

    public void setTipo(TipoImovel tipo) {
        this.tipo = tipo;
    }

    public LocalDateTime getDataCadastro() {
        return dataCadastro;
    }

    public void setDataCadastro(LocalDateTime dataCadastro) {
        this.dataCadastro = dataCadastro;
    }
}
