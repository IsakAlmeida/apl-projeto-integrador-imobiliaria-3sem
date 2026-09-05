package school.sptech.api_imobiliaria.model;


public class TipoImovel {
    private Integer id;
    private String nome;

    public TipoImovel() {
    }

    public TipoImovel(Integer id, String nome) {
        this.id = id;
        this.nome = nome;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
}
