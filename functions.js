/**
 * A extrutura de uma função:
 *
 * (nome reservado)  (nome da funcao) (parametros)     (abertura do escopo da função)  (fechamento do escopo da função)
 * function           name                ()                      {                               }
 *
 * o resultado é:
 *
 * function(){
 *  aqui vai toda a lógica da função
 * }
 */

// 01 Para que serve uma função?

// 02 Declare um função chamada soma que recebe dois valores por parametro (num1, num2) e o retorno dessa função deve ser a soma dos valores.

// 03 O que é a declaração de uma funcao?

/**
 * Se executado o código a baixo, qual será o resultado da função?
 *
 * [ ] - Retorna um nome
 *
 * [ ] - Retorna null
 *
 * [ ] - Não retorna nada
 */
function myName(name) {
  return name;
}

myName;

// 04 Como chamar uma função para que ela seja executada?

/**
 * 05 O que é o escopo de uma função?
 */

/**
 * 06 Dado o código abaixo, responda:
 *
 * [ ] - A variável userStatus está dentro do escopo da função getStatus
 *
 * [ ] - A variável userStatus não está dentro do escopo da função getStatus
 */
const userStatus = false;

function getStatus() {
  return userStatus;
}

/**
 * O código abaixo deverá printar um undefined, por que?
 *
 * R:
 */
function getUserName() {
  const name = "My name";

  return name;
}

getUserName();

console.log(name);
