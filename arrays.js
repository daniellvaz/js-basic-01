// 01 Defina uma variável com o nome "arrayNumbers" que receberá um vetor (Array) com numeros de 1 a 10

/**
 * 02 - Dado o array abaixo, responda a alternativa correta:
 *
 * [ ] - Válido
 * [ ] - Inválido
 */
const myArray = [1, "Cachorro", { nome: "Pessoa", idade: 20 }];

// 03 - O que é um array?

// 04 - Qual a utilidade de criar vetores (Arrays)?

// 05 - O array faz parte de uma estrutura de dados?

//  ------------------- Laços de repetição ------------------------
/**
 * Os laços de repetição são usados para repetir um comportamento. No exemplo abaixo
 * vamos usa-lo para percorrer os arrays
 */

// 01 - Dado o array abaixo, crie um for para retornar os numberos pares:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 02 - Dado o array criado anteriormente, crie um while para retornar os numeros de 1 a 5

// 03 - Dado o array criado anteriormente, crie um do while para retornar os numeros de 5 a 10

// 04 - Crie um print com o valor total dos items dentro do array numbers. O resultado deve ser 10

/**
 * No javascript, todo array tem "dentro de si" algumas funções para manipulação dos dados
 * internos. Essas funções estão presentes no que chamamos de Prototypes. São elas (funçoes ou métodos):
 *
 * map: percorre o array e cria um novo array a partir do princial
 * forEach: percorre o array e não cria um novo array a partir do principal
 * filer: filtra o array para achar um determinado valor que deve ser expecificado e retorna uma novo array
 * find: procura dentro do array um valor definido e retorna somente o valor expecificado.
 * reduce: reduz o array dentro de um valor expecificado.
 *
 * Seguindo essa ideia, podemos manipular o array sem utlizar o for, while ou do while. Mas essas funções
 * ainda são uteis.
 *
 * para entender mais sobre, recomendo esse vídeo: https://www.youtube.com/live/NuqhGaYf24w?si=OOaq083wZCLRgMQa
 *
 * Abaixo um exemplo:
 */
const total = numbers.reduce((acc, number) => acc + number, 0);

/**
 * O resultado será 55, que é a somatória dos valores
 */
console.log(total);
