# labook-template

/Controller:
tudo que é relacionada a lógica do projeto

/Models:
Tudo relacionado a manipulação no banco de dados

/Routes:
tudo que é relacionado a rotas sendo:
index tudo que é relacionado a primeira parte exemplo: "http://localhost:3333/user

/user -> cria a rota user.routes.ts e lá fica tudo de endpoints dela

/utils -> tudo de libs que seja para ajudar na criação e seja externa, exemplo:

- hash de senhas
- JWT
- Knex

<h1><b>Passos para criar novos sub-rotas (ou seja que é relacionado a rota pronto (user))</b></h1>
<ul>cria a rota com seu método http(put,delete,post,get)</ul>
<ul>cria o controller</ul>
<ul>volta para o arquivo de rotas e instancia o controller lá</ul>
<ul>adiciona o middleware da rota com o método da classe exemplo: <b>userRouter.post('/', createUser.create);</b></ul>
<ul>cria o model da rota</ul>
<ul>faz os testes para ver se está tudo ok</ul>

<h2>Sugestão de nomes para os arquivos</h2>

<h3>Controller</h3>
<b>QueVaiFazerDeQuemÉControler.ts</b>
exemplo: Create(oquefaz)User(de quem é)Controler.ts(CreateUserController.ts)

<h3>Models</h3>
<b>OqueFazDeQuemÉ.ts</b>
exemplo: Create(oquefaz)User(de quem é).ts(CreateUser.ts)

<h3>Routes</h3>
<b>QuemVaiUsar.ts</b>
exemplo: User(Quem usa a rota)routes.ts(user.routes.ts)
