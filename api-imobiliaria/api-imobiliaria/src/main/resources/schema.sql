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