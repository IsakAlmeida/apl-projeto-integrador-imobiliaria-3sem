package school.sptech.api_imobiliaria.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.web.bind.annotation.*;
import school.sptech.api_imobiliaria.model.Imovel;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/imoveis")
@CrossOrigin(origins = "*") //Permite acesso de qualquer dominio
public class ImovelController {
    @Autowired
    private JdbcTemplate template;


    @GetMapping
    public ResponseEntity listarImoveis() {
        String sql = "SELECT i.*, ti.nome FROM imovel i JOIN tipos_imovel ti ON i.fk_tipo = ti.id";

        List<Map<String, Object>> imoveis = template.queryForList(sql);
        return ResponseEntity.status(200).body(imoveis);
    }

    @GetMapping("/{id}")
    public ResponseEntity buscarImovel(@PathVariable int id) {
        String sql = "SELECT i.* FROM imovel i JOIN tipos_imovel ti ON i.fk_tipo = ti.id WHERE i.id = ?";

        try{
            Map<String, Object> imovelEncontrado = template.queryForMap(sql, id);
            return ResponseEntity.status(200).body(imovelEncontrado);
        } catch (RuntimeException e){
            System.out.println(e);
            return ResponseEntity.status(404).build();
        }
    }

    public boolean tituloExiste(String titulo){
        String sql = "SELECT COUNT(id) FROM imovel WHERE LOWER(titulo) = ?";
        Integer resultado = template.queryForObject(sql, Integer.class, titulo.toLowerCase());

        if(resultado > 0) return true;
        return false;
    }

    @PostMapping
    public ResponseEntity cadastrarImovel(@RequestBody Imovel imovel){
        String sql = "INSERT INTO imovel(titulo, descricao, preco, endereco" +
                ", area, quartos,banheiros, garagens, fk_tipo) VALUES (?, ?, ?," +
                "?, ?, ?, ?, ?, ?)";


        if(imovel.getTitulo() == null || imovel.getTitulo().isBlank()) return ResponseEntity.status(400).body("Titulo é obrigatório!");
        boolean existeTitulo = tituloExiste(imovel.getTitulo());
        if(existeTitulo) return ResponseEntity.status(409).body("Titulo de imóvel já existente!");
        if(imovel.getDescricao() == null || imovel.getDescricao().isBlank()) return ResponseEntity.status(400).body("Descrição é obrigatório!");
        if(imovel.getPreco() == null || imovel.getPreco() <= 0.0) return ResponseEntity.status(400).body("Preço é obrigatório e deve ser maior que 0!");
        if(imovel.getEndereco() == null || imovel.getEndereco().isBlank()) return ResponseEntity.status(400).body("Endereço é obrigatório!");
        if(imovel.getArea() == null || imovel.getArea() <= 0.0) return ResponseEntity.status(400).body("Area é obrigatório e deve ser maior que 0!");
        if(imovel.getTipo().getId() == null || imovel.getTipo().getId() <= 0) return ResponseEntity.status(400).body("Tipo de imovel é obrigatório!");

        if(imovel.getQuartos() == null || imovel.getQuartos() <= 0) imovel.setQuartos(0);
        if(imovel.getBanheiros() == null || imovel.getBanheiros() <= 0) imovel.setBanheiros(0);
        if(imovel.getGaragens() == null || imovel.getGaragens() <= 0) imovel.setGaragens(0);

        KeyHolder holder = new GeneratedKeyHolder();

        template.update(con -> {
            PreparedStatement statement = con.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            statement.setString(1, imovel.getTitulo());
            statement.setString(2, imovel.getDescricao());
            statement.setDouble(3, imovel.getPreco());
            statement.setString(4, imovel.getEndereco());
            statement.setDouble(5, imovel.getArea());
            statement.setInt(6, imovel.getQuartos());
            statement.setInt(7, imovel.getBanheiros());
            statement.setInt(8, imovel.getGaragens());
            statement.setInt(9, imovel.getTipo().getId());

            return statement;
        }, holder);

        int idGerado = holder.getKey().intValue();
        imovel.setId(idGerado);
        return ResponseEntity.status(201).body(imovel);
    }
}
