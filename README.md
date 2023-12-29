# Lista de tarefas

Olá, este pequeno e simples projeto tem como objetivo aperfeiçoar o que foi aprendido sobre CRUD, deste modo, focando em lista de tarefas a serem feitas e construindo uma sólida estrutura na parte do back-end. Até então, este projeto não tem como foco o front-end, talvez ao amadurecer melhor possa estar desenvolvendo ambas as partes!


## Endpoints
**Cadastro de usuário**

**POST** **/usuario**
Este endpoint tem como foco o cadastro de usuários no sistema e que serão armazenados no banco de dados, seguindo padrão de criptografia da senha do usuário durante o armazenamento.

Exemplo:
{
	"nome": "Fulano Silva",
	"email": "fulanosilva@gmail.com",
	"senha":"frt124hdt5"
}

----
**Login de usuário**

**POST** **/login**
Neste caso do login será efetuado o login do usuário para que possa realizar as ações referentes as tarefas, com isso sendo gerado um token para que possa efetuar tais procedimentos.

Exemplo:
{
	"email": "fulanosilva@gmail.com",
	"senha":"frt124hdt5"
}

---
**Cadastrar tarefa**

**POST** **/tarefa**
Aqui realizamos o registro de uma tarefa, esta tarefa possui em seu req.body:

 - titulo;
 - descricao;
 - data_conclusao;
 - usuario_id;
 - concluido;
 
 Exemplo: 
 {
	"titulo": "Estudar quimica básica",
	"descricao":"",
	"data_conclusao": "2023/12/25",
	"usuario_id": 50,
	"concluido":"nao"
}

-----
 **Tarefas de usuário**
 
 **GET /tarefa**
Consiste em listar todas as tarefas do usuário até então;

----
**Editar tarefa**

**PUT /tarefa/:id**
Quanto ao editar tarefas tem como objetivo realizar edições em uma tarefa específica através do req.params.

Exemplo:
{
	"titulo": "Estudar português básica",
	"descricao":"aaaaaaa",
	"data_conclusao": "2023/12/25",
	"concluido": "sim"
}

---
**Excluir tarefa**

**DELETE /tarefa/:id**

Realizar a exclusão de uma tarefa.

