const offset = 0;
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;


fetch(url)
    .then((response) => response.json()) // Estou transformando uma promessa do body em json
    .then((jsonBody) => console.log(jsonBody)) // Recendo o body da linha acima e printando em tela
    .catch((error) =>
        console.log(error))
    .finally(() => console.log('done'));

const x = 10 + 10;
console.log(x);
