# 🚗 Cadastro de Carros  

Um projeto Angular para cadastro, listagem, atualização e remoção de carros.  
Conta com Bootstrap para o layout responsivo e segue boas práticas de organização de componentes.  

---

## ✨ Funcionalidades  

- ➕ **Cadastro** de novos carros (nome, montadora, preço, ano)  
- 📋 **Listagem** de carros cadastrados  
- ✏️ **Edição** dos dados de um carro  
- 🗑️ **Remoção** de carros  
- 📱 **Interface responsiva** com Bootstrap  

---

## 🗂️ Estrutura do Projeto  

```
src/
  app/
    components/
      carro/      # Formulário de cadastro/edição de carro
      carros/     # Listagem e gerenciamento dos carros
      header/     # Cabeçalho da aplicação
    models/
      carro.ts    # Interface do modelo Carro
    app.ts        # Componente principal
    app-module.ts # Módulo principal
    ...
  index.html
  styles.css
```

## 🚀 Como rodar o projeto  

1. Instale as dependências:

   ```sh
   npm install
   ```

2. Rode o servidor de desenvolvimento:

   ```sh
   npm start
   ```

3. Acesse no navegador: [http://localhost:4200](http://localhost:4200)

## 🛠️ Tecnologias utilizadas

- [Angular 20](https://angular.io/)
- [Bootstrap 5](https://getbootstrap.com/)
- [TypeScript](https://www.typescriptlang.org/)
