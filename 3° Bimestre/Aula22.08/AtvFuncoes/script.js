// 1.Crie uma função escreva(texto) que receba um texto como parâmetro e exiba esse texto no console.
function escreva(texto)
{
    console.log(texto)

}
escreva("texto")

//2.Crie uma função soma(x, y) que receba dois números como parâmetros e retorne sua soma.
function soma(x, y){
    return x + y;
}
console.log(soma(5,4))

//3.Crie uma função hora() que retorne o horário atual do sistema no formato horas:minutos:segundos.
function hora()
{
    let data = new Date();
    console.log(data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds());
}
hora()

//5.Crie uma função quadrado(num) que receba um número como parâmetro e retorne o seu quadrado.
function quadrado(num)
{
    num = num*num
    console.log(num)
}

//6.Crie uma função cubo(num) que receba um número como parâmetro e retorne o seu cubo.
quadrado(5)

function cubo(num)
{
    num = num*num*num
    console.log(num)
}
cubo(5)

//7.Crie uma função potencia(num, expoente) que receba como parâmetros um número (num) e um expoente, e retorne a potenciação/exponenciação de num elevado a expoente.
function potencia(num, expoente)
{
    num = num ** expoente
    console.log(num)
}
potencia(2,3)

//9.Crie uma função imc(peso, altura) que receba os parâmetros peso e altura, e retorne o Índice de Massa Corporal resultante.
function imc(peso, altura){
   
    let imc = peso/altura**2
    console.log(imc)
}
imc(38, 1.60)

//10.Crie uma função calculaAreaQuadrado(lado) que calcule e retorne a área de um quadrado com base na medida de seu lado.
function calculaAreaQuadrado(lado){
    area = lado*lado
    console.log(area)
}
calculaAreaQuadrado(5)