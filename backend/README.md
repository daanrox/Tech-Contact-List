# Gerenciador de Contatos - Backend ContactList

## Descrição
O backend deste projeto foi desenvolvido utilizando NestJS com TypeScript, fornecendo uma infraestrutura robusta para suportar as funcionalidades do gerenciador de contatos. Utilizando tecnologias avançadas, o backend oferece segurança, eficiência e flexibilidade para suportar as operações do frontend.

## Tecnologias Utilizadas
- NestJS
- TypeScript
- Prisma
- PostgreSQL
- Bcryptjs
- Passport-jwt

## Backend em Produção
O backend está hospedado em [https://daanrox-contact-list.onrender.com/api](https://daanrox-contact-list.onrender.com/api), onde você pode acessar a documentação detalhada na interface do Swagger UI.

## Funcionalidades e Ferramentas
- **NestJS:** Utilizado como o framework principal para desenvolvimento da API RESTful.
- **TypeScript:** Proporciona segurança e melhora na produtividade durante o desenvolvimento.
- **Prisma e PostgreSQL:** Banco de dados relacional para armazenamento seguro e confiável dos dados.
- **Bcryptjs:** Utilizado para criptografar senhas e garantir a segurança das informações dos usuários.
- **Passport-jwt:** Estratégia de autenticação para validar e proteger rotas com JSON Web Token (JWT).

## Executando o Projeto

### Pré-requisitos
Certifique-se de ter o Node.js instalado.

### Instalação das Dependências
No terminal, execute o seguinte comando para instalar as dependências:

```bash
npm install
```

### Rodando as migrações
Você precisa rodar as migrações executando o seguinte comando:

```bash
npm prisma migrate dev
```

### Rodando o Projeto
Para iniciar o backend, utilize o comando: 

```bash
npm run start:dev
```
Isso iniciará o servidor NestJs.

## Contato
Se tiver dúvidas ou precisar de mais informações, sinta-se à vontade para entrar em contato:
- Email : [contato@daanrox.com](mailto:contato@daanrox.com)
- LinkedIn: [https://www.linkedin.com/in/daanrox/](Daanrox)

--- 

Este projeto faz parte do Bootcamp de Desenvolvimento Fullstack na Kenzie Academy.
