# InfoAcad - Sistema de Informações Acadêmicas para o IFPR Campus Palmas

## Introdução
A entrada na Universidade é sempre um desafio: um ambiente completamente novo e organizado de uma maneira com que muitos ainda não tiveram contato. Divididos em blocos, setores e departamentos, cada um possui uma função específica, e recorrentemente torna-se difícil saber onde pode-se conseguir uma determinada informação ou realizar uma atividade. Essa última situação, inclusive, deixa de se restringir aos recém-chegados, mas se estende também para os acadêmicos que já estão cursando a faculdade. O site da faculdade, apesar de informativo, possui diversas abas e links, tornando todo o processo demorado, e geralmente, ineficaz. Essa ferramenta costuma ser acessada corriqueiramente apenas por uma mínima parcela dos alunos, fazendo com que a informação não atinja o público-alvo de maior interesse: os alunos da faculdade. Não apenas isso, mas essa dificuldade de obtenção de informações específicas afasta ainda mais os alunos do portal de notícias, de maneira que eles estejam sempre dependendo da ajuda de colegas que já possuam uma maior familiaridade com a plataforma mencionada. Para contornar essa problemática, desenvolveu-se um aplicativo mobile para o Instituto Federal do Paraná – Campus Palmas, de maneira a centralizar as informações aos alunos.

Em um mural de notícias, pode-se ter acesso rápido, direto e objetivo a diversas postagens, em ordem cronológica, a publicações referentes à prazos, como Assistência Estudantil, matrículas, cancelamentos e transferências de curso, decisões orçamentárias, aquisição de novos equipamentos, planejamento, reformas, eventos, estágios, avisos importantes, dentre demais outras pertinentes ao ambiente acadêmico. Já na categoria de informações específicas aos Cursos, o aluno pode ter acesso a postagens referentes a Semanas Acadêmicas, Centro Acadêmico, Confraternizações e recados do Colegiado. Dessa forma, pretende-se aumentar não apenas o acesso à informação, mas também o engajamento do aluno nos mais diversos assuntos estudantis. Os acadêmicos, conscientizados sobre gastos, eventos e prazos podem participar, engajar-se e colaborar com decisões e atividades dentro do âmbito acadêmico, melhorando tanto a sua experiência e aproveitamento com o ensino superior quanto no aprimoramento da Instituição em si.

## Objetivos
* Analisar os canais de comunicação existentes atualmente entre o Instituto Federal do Paraná – Campus Palmas e os acadêmicos, e propor a criação de um aplicativo
para centralizar o acesso à informação;
* Tornar o acesso às informações institucionais (notícias, projetos, prazos, eventos, dentre outros assuntos relevantes) rápido e prático por meio de um aplicativo para os
acadêmicos e servidores da instituição;
* Projetar um aplicativo para gestão das informações acadêmicas, utilizando-se da análise e modelagem Orientada a Objetos, metodologia de desenvolvimento baseada no Processo Unificado e organização do fluxo de trabalho baseada na Estrutura Analítica do Projeto;
* Elaborar um documento de requisitos e delimitar o escopo, funcionalidades, e atributos do sistema analisado e projetado;
* Criar um protótipo de média fidelidade, e basear o desenvolvimento desse software a partir do protótipo criado;
* Escolher uma tecnologia híbrida e desenvolver testes e exemplos práticos para uso no desenvolvimento do software em questão.
* Desenvolver um aplicativo multiplataforma com uso de React Native e Firebase, visando possibilidade de integração no futuro com outros sistemas existentes
na instituição (Sagres);
* Oferecer o recurso de notificações push, para que o acadêmico ou servidor receba as informações recentes em seu celular sem a necessidade de abrir o aplicativo; (Trabalhos Futuros)


## Principais Funcionalidades do Aplicativo
* Registro e Autenticação de Usuários com uso de Firebase Authentication;
* Sincronização do Banco de Dados em Tempo Real com o Uso do Firebase Realtime Database;
* Cadastro de Notícias com possibilidade de envio de mídia com o uso do Firebase Storage;
* Gerenciamento de propriedades e estados do aplicativo com o uso do framework Redux;
* Tratamento de requisições HTTP com o uso do Axios, e gerenciamento de requisições assíncronas com o Middleware Redux-Thunk;


## Configurações do Ambiente de Desenvolvimento

### Requisitos
  * Visual Studio Code (IDE para desenvolvimento e deploy com o React Native);
  * Node;
  * Java Development Kit (JDK);
  * Android Studio;
  * Chocolatey (gerenciador de pacotes para Windows, podendo ser utilizados outros pacotes dependendo do OS conforme documentação acima);
  * Conexão com a Internet (para uso do banco de dados Firebase Realtime Database, Firebase Storage e Firebase Authentication, e download dos módulos node);

Existem duas maneiras de configurar o ambiente de desenvolvimento, sendo elas pelo React Native CLI ou pelo React Native Expo.
Para o desenvolvimento desse projeto, utilizou-se o React Native CLI, no Windows, para a depuração no Android, e foi seguida a documentação oficial, disponível no link https://reactnative.dev/docs/environment-setup.
Primeiro, procedeu-se para a instalação do Chocolatey, um gerenciador de pacotes no Windows, que pode ser baixado no site oficial https://chocolatey.org/, clicando-se no botão 'Get Started'.
Seguindo-se a documentação, executa-se o comando
```
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```
No PowerShell ou no Terminal do Windows em Modo de Administrador.
Ainda no Terminal, executa-se o comando
```
choco install -y nodejs.install python2 openjdk8
```
Para a instalação do Nodejs, Python e do openjdk, requisitos para o projeto.

Também é necessário a instalação do SDK do Android, que já é instalado por padrão em sua versão mais recente assim que instala-se o Android Studio. No entanto, a documentação recomenda a instalação do SDK do Android 10 (Q), e isso pode ser gerenciado pelo SDK Manager no próprio Android Studio.
O Android Studio pode ser baixado pelo site oficial https://developer.android.com/studio.

## Adicionar as variáveis de ambiente
Abrir o Painel de Controle;
Entrar em contas de usuário, e depois em contas de usuário novamente;
Entrar em Alterar as variáveis do meu ambiente;
Clicar em Novo, e criar uma variável ANDROID_HOME para o usuário, que aponta para o diretório do Android SDK;

Para as configurações em demais sistemas operacionais, a documentação oficial acima pode e deve ser consultada.

## Banco de Dados
O Banco de Dados utilizado foi o Firebase Realtime Database, um banco de dados não relacional, hospedado na nuvem. Os dados são armazenados como JSON e sincronizados em tempo real com todos os clientes conectados.
É uma solução eficiente e de baixa latência para aplicativos móveis que exigem estados sincronizados entre clientes em tempo real.
Para a autenticação de usuário, utilizou-se o Firebase Authentication, que fornece serviços de back-end, SDKs fáceis de usar e bibliotecas de IU prontas para autenticar usuários no aplicativo.
Nesse primeiro instante, a autenticação é realizada com o uso de e-mail e senha, mas podem ser utilizados também números de telefone, provedores de identidade federados conhecidos, como Google, Facebook e Twitter, entre outros.
Para o envio de imagens para o banco de dados, utilizou-se o Firebase Storage, O Cloud Storage para Firebase foi criado para os desenvolvedores de apps armazenarem e exibirem conteúdo gerado pelos usuários, como fotos ou vídeos.
O Cloud Storage para Firebase é um serviço de armazenamento de objetos avançado, simples e econômico criado para a escala do Google. Com os SDKs do Firebase para Cloud Storage, é possível usar a segurança do Google para fazer upload e download de arquivos nos apps do Firebase, independentemente da qualidade da rede.

## Execução de Código

### Estrutura do Código
O código está organizado em pastas, e faz o uso da biblioteca Redux (com arquitetura flux), um gerenciador de estados da aplicação para o React Native. Isso se faz necessário para controlar e mapear as interações entre a interface gráfica e as propriedades dos dados, que são armazenados em um Store. Com o Redux, é possível escrever aplicações que se comportam de maneira consistente, em diferente ambientes, e de fácil testagem.
Dessa forma, na pasta raíz ( / ) do projeto encontram-se os arquivos de configuração, bem como o arquivo index.js onde define-se a estutura principal do aplicativo, usando o Redux e configurando o Store. Dentro dessa pasta, encontram-se as pastas /_tests_, /ios, e /android, que são automaticamente criadas assim que se inicia um projeto React Native. Na pasta/assets, são armazenados arquivos adicionais, como fontes e imagens utilizadas de maneira recorrente ao longo do aplicativo, e na pasta /functions se encontram algumas configurações de funcionamento do Firebase, bem como os módulos node.js.

Dentro da pasta /src, pode-se encontrar os arquivos App.js, que realiza a renderização principal do aplicativo, bem como das mensagens que aparecem em caixas de diálogo, e o arquivo Navigator.js, que estabelece as rotas dentro do aplicativo, bem como o funcionamento da barra de navegação inferior. Dentro de /src/components, encontra-se alguns componentes estruturados e criados para uso nas telas principais dos aplicativos, que se encontram na pasta /src/screens. Por utilizar a biblioteca Redux, onde se faz o uso de gerenciamento de estados por meio de funções que disparam ações, tem-se também a pasta /src/store/actions, onde se criam essas ações, e também a pasta /src/store/reducers, que escutam essas ações disparadas, junto do estado atual da aplicação e realizam alterações no estado da aplicação, retornando um novo estado. Vale salientar, que como é feito o uso de um banco de dados não relacional em tempo real, algumas operações são assíncronas, e por isso, faz-se necessário o uso de um middleware, 'redux-thunk', que trata o código e ao invés de retornar uma ação diretamente, retorna uma função que é disparada apenas se certas condições forem satisfeitas. Para que o Redux funcione, é necessário que os componentes React sejam conectados ao Redux Store, e isso é sempre feito ao final do código, utilizando-se a função connect (que por sua vez segue o padrão de projeto provider), integrando as funções 'mapStateToProps' e 'mapDispatchToProps' ao componente.


### Código Fonte do Projeto
O presente projeto possui código fonte aberto, e está disponível para consulta e estudo em repositório público nesse GitHub.
Para fazer o download do projeto para a sua máquina local, pode ser utilizado o botão verde 'Code' do canto superior direito do GitHub, ou o uso do comando
```
    git clone https://github.com/eruzvinicius/infoacad
```

### Como rodar a aplicação
Após instaladass as ferramentas, tecnnologias e módulos utilizados, conectar o celular via cabo USB com a opção de Depuração USB ativada, ou abrir o Android Studio e abrir o emulador desejado.
Na IDE, digita-se o seguinte comando para executar o aplicativo em um dispositivo Android
```
  npx react-native run-android
```

Com o React Native, é possível ativar o Live Reloading, uma função que atualiza o aplicativo automaticamente assim que os arquivos são alterados e salvos. Para isto, basta chacoalhar o smartphone para ativar o menu de desenvolvedor, que traz diversas opções interessantes, tornando o processo de desenvolvimento mais rápido e prático.

### Release
Em um momento futuro, oportuno e próximo, o aplicativo será disponibilizado nas lojas de aplicativos dos Sistemas Operacionais Android e iOS, de maneira gratuita, assim como especificado nos requisitos não funcionais.

## Interface
As seções abaixo explicam de maneira breve e resumida o funcionamento e interação entre as principais telas do aplicativo com o código.

### Splash Screen
É a primeira tela que é mostrada ao usuário, por um período breve de dois segundos. Nela, é apresentado o nome do aplicativo, o ícone principal, a Instituição de Ensino com o campus e os créditos de desenvolvimento. Constitui a identidade visual do aplicativo.
A Splash screen é definida pelo arquivo /src/screens/splash.js e não faz uso de nenhum componente criado separadamente.

### Tela de Feed de Notícias
Após a apresentação da Splash Screen, o usuário é redirecionado de maneira automática para o Feed de Notícias. Nela, é possível consultar todas as postagens realizadas pelos usuários cadastrados e com permissão, mesmo se ainda não foi feito o login.
Por padrão, caso a autenticação ainda não tenha sido realizada, não é possível realizar comentários. As notícias consistem de um autor, um título, uma categoria, uma data, uma imagem, e um array de comentários.
As notícias são apresentadas em ordem cronológica decrescente, isto é, das notícias mais recentes em cima, para as mais antigas, embaixo.
O Feed de Notícias é definido pelo arquivo /src/screens/Feed.js, e pode ser acessado pelo primeiro ícone, no canto inferior esquerdo, da Barra de Navegação Inferior. Essa tela faz uso do Header, um componente que aparece no topo da tela apresentando o nome do aplicativo e interagindo com o estado global da aplicação verificando se o usuário está logado ou não. 
Também faz o uso do componente comentário, autor e post, onde são definidas as suas estruturas, nos arquivos /src/components/Comments.js, /src/components/Author.js e src/components/Post.js, respectivamente.
Faz o uso também do componente Navigator (src/Navigator.js), na tela inferior, por meio do qual é possível navegar entre as telas de Login, Feed de Notícias e Criação de Publicação.

### Tela de Cadastro de Usuário
Na tela de cadastro do usuário, acessada pelo botão de Registro de Usuário dentro da tela de Login, são apresentados diversos componentes, solicitando os dados da pessoa como: nome, email, cpf, categoria (se é acadêmico, servidor, egresso ou outro), o curso (apresentando-se as opções de não se aplica, dependendo da categoria, e todos os cursos disponíveis no IFPR Campus Palmas), e senha. Assim que o usuário toca em salvar, ele é redirecionado para a tela de Login, caso todas as informações tenham sido preenchidas corretamente.
A Tela de Cadastro do usuário é definida pelo arquivo /src/screens/Register.js, e faz o uso do componente Navigator.js (/src/Navigator.js) para que sejam definidas as rotas entre as telas de Login e Registro.


### Tela de Cadastro de Postagem
Na tela de cadastro de postagem, acessada pela Barra de Navegação Inferior, no ícone central, são apresentados diversos componentes que constituem uma postagem, como foto, título e data da notícia, categoria e texto da publicação. A tela é definida pelo arquivo /src/AddPhoto.js, e faz o uso do componente Navigator (src/Navigator.js), na tela inferior, por meio do qual é possível navegar entre as telas de Login, Feed de Notícias e Criação de Publicação. Uma vez que o usuário esteja logado, a tela de login é substituída pela Tela de Perfil de Usuário.
As postagens podem apenas ser realizadas por usuários que fizeram o login e que possuem permissão de postagem, sendo apresentada uma mensagem de erro caso a condição não seja satisfeita. 


### Tela de Perfil de Usuário
Na tela de Perfil de Usuário, é apresentado de maneira breve e simples os dados utilizados pela pessoa durante o seu cadastro, e é definida pelo arquivo /src/Profile.js. Faz o uso do componente Navigator (src/Navigator.js), na tela inferior, por meio do qual é possível navegar entre as telas de Login, Feed de Notícias e Criação de Publicação. Uma vez que o usuário esteja logado, a tela de login é substituída pela Tela de Perfil de Usuário. Além disso, existe também um botão de Logout para que ela possa encerrar a sua sessão e fazer o login com outra conta.
