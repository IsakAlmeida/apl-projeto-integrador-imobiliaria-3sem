package school.sptech.api_imobiliaria.controller;

import org.apache.catalina.valves.rewrite.ResolverImpl;
import org.springframework.dao.DataAccessException;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import school.sptech.api_imobiliaria.model.Imovel;

import java.util.List;

@RestController
public class ImovelController {
    private JdbcTemplate template;

    @GetMapping
    public ResponseEntity<List<Imovel>> listarImoveis(){
        String sql = "SELECT i.*, ti.nome FROM imovel i JOIN tipo_imovel ti ON i.fk_tipo = ti.id";

        try{
            List<Imovel> imoveis = template.query(sql, new BeanPropertyRowMapper<>(Imovel.class));
            return ResponseEntity.status(200).body(imoveis);
        } catch (DataAccessException e) {
            return ResponseEntity.status(500).build();
        }

    }
}
