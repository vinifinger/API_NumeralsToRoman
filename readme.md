## :rocket: Tecnologias 

Esse projeto foi desenvolvido com as seguintes tecnologias:

-  [Node.js](https://nodejs.org)
-  [Mocha](https://www.npmjs.com/package/mocha)
-  [Chai](https://www.chaijs.com)
-  [Request](https://www.npmjs.com/package/request)
-  [Express](https://www.npmjs.com/package/express)
-  [Nodemon](https://www.npmjs.com/package/nodemon)
-  [Celebrate](https://www.npmjs.com/package/celebrate)

## :dart: Como foi resolvido o problema

O problema foi resolvido utilizando um objeto com os números romanos correspondentes aos grupos de unidade, dezena, centena e milhar. Onde em um looping, o número informado era divido e analisado caractere por caractere junto com seu tamanho para fazer a busca no grupo numérico correto, retornando o número em romano certo.

O número máximo para a conversão é de '3999'.
Foram implementados um total de 8 testes, que ocorrem de forma crescente para simular o algoritmo desde os números menores até números e entradas não aceitas.
 
## :information_source: Como usar

Para clonar e rodar os testes dessa aplicação, vai ser necessário [Git](https://git-scm.com) e [Node.js](https://nodejs.org) instalados no seu computador. 

Para utilizar o conversor, é só rodar as linhas abaixo e testar utilizando a um [Insomnia](https://insomnia.rest) ou [Postman](https://www.postman.com) na rota [localhost:3333/numerals](http://localhost:3333/numerals).

O Endpoint é método `POST`, esperando um corpo simples como o abaixo: 
```JSON
{
    "numerals": 50
}
```

Usar as seguintes linhas de comando:

```bash
# Clonar o repositório
$ git clone https://github.com/vinifinger/API_NumeralsToRoman.git

# Entre no repositório
$ cd API_NumeralsToRoman

# Instale as dependencias
$ npm install

# Rodar aplicação
$ npm run dev

# Rodar testes
$ npm run test
```

## :memo: Licença
Este projeto está sob a licença do MIT.
---

Desenvolvido com ♥ por Vinicius M. Finger :wave: [Linkedin](https://www.linkedin.com/in/vinicius-finger/)