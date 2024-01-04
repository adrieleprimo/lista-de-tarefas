CREATE TABLE tarefas(
  id SERIAL PRIMARY KEY,
  titulo TEXT NOT NULL,
  descricao TEXT,
  data_conclusao DATE
  );

CREATE TABLE usuarios(
    id SERIAL PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(100) NOT NULL
  );

  ALTER TABLE tarefas ALTER data_conclusao TYPE TEXT;
  ALTER TABLE tarefas ADD COLUMN concluido VARCHAR(3);
ALTER TABLE tarefas DROP COLUMN concluido;
ALTER TABLE tarefas ADD COLUMN concluido BOOLEAN;
