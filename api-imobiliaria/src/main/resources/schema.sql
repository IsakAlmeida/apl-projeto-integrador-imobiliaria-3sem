CREATE DATABASE IF NOT EXISTS db_imobiliaria;
USE db_imobiliaria;

-- Tabela para armazenar os tipos de imovéis
CREATE TABLE tipos_imovel(
id INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(50) NOT NULL UNIQUE
);

-- Inserindo valores padrão para tipos_imovel
INSERT INTO tipos_imovel (nome) VALUES 
('Apartamento'), ('Casa'), ('Comercial'), ('Terreno'), ('Sala');

-- Tabela para armazenar os imóveis
CREATE TABLE imovel(
id INT AUTO_INCREMENT PRIMARY KEY,
titulo VARCHAR(100) NOT NULL,
descricao VARCHAR(500),
preco DOUBLE NOT NULL,
endereco VARCHAR(250) NOT NULL,
area DOUBLE NOT NULL,
quartos INT DEFAULT 0,
banheiros INT DEFAULT 0,
garagens INT DEFAULT 0,
fk_tipo INT NOT NULL,
data_cadastro DATETIME DEFAULT current_timestamp,
CONSTRAINT fk_tipo FOREIGN KEY (fk_tipo) 
	REFERENCES tipos_imovel(id)
);

INSERT INTO imovel (titulo, descricao, preco, endereco, area, quartos, banheiros, garagens, fk_tipo) 
VALUES 
('Apartamento 2 Quartos - Vila Mariana', 'Apartamento bem localizado perto do metrô', 450000.00, 'Rua dos Pinheiros, 123, São Paulo', 85.5, 2, 1, 1, 1);

INSERT INTO imovel (titulo, descricao, preco, endereco, area, quartos, banheiros, garagens, fk_tipo) 
VALUES 
('Casa 3 Quartos - Jardins', 'Casa com jardim e piscina', 750000.00, 'Avenida Paulista, 500, São Paulo', 150.0, 3, 2, 2, 2);

INSERT INTO imovel (titulo, descricao, preco, endereco, area, quartos, banheiros, garagens, fk_tipo) 
VALUES 
('Sala Comercial - Centro', 'Sala para escritório no centro da cidade', 200000.00, 'Rua 25 de Março, 1000, São Paulo', 50.0, 0, 1, 0, 5);

INSERT INTO imovel (titulo, descricao, preco, endereco, area, quartos, banheiros, garagens, fk_tipo) 
VALUES 
('Terreno - Zona Leste', 'Terreno comercial com ótima localização', 300000.00, 'Rodovia Dutra, km 15, São Paulo', 500.0, 0, 0, 0, 4);