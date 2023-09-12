class UserInfo {
    constructor(nome, idade, notaPort, notaMat, notaWeb) {
        this.nome = nome;
        this.idade = idade;
        this.notaPort = notaPort;
        this.notaMat = notaMat;
        this.notaWeb = notaWeb;
    }

    calcularMedia() {
        return (this.notaPort + this.notaMat + this.notaWeb) / 3;
    }

    calcularIdade(ano) {
        return ano - this.idade;
    }
}

const nome = prompt("Digite seu nome:");
const idade = parseInt(prompt("Digite sua idade:"));
const notaPort = parseFloat(prompt("Digite sua nota em Português:"));
const notaMat = parseFloat(prompt("Digite sua nota em Matemática:"));
const notaWeb = parseFloat(prompt("Digite sua nota em Desenvolvimento WEB:"));
const ano = parseInt(prompt("Digite um ano do futuro:"));
const corFavorita = prompt("Digite sua cor favorita em inglês:");

const user = new UserInfo(nome, idade, notaPort, notaMat, notaWeb);

document.getElementById("nome").textContent = user.nome;
document.getElementById("idade").textContent = user.idade + " anos";
document.getElementById("notaPort").textContent = user.notaPort;
document.getElementById("notaMat").textContent = user.notaMat;
document.getElementById("notaWeb").textContent = user.notaWeb;
document.getElementById("media").textContent = user.calcularMedia().toFixed(2);
document.getElementById("ano").textContent = user.calcularIdade(ano) + " anos";

function exibirQuadrado3x3(numerosArray){
    if(numerosArray.length === 9){
        let quadrado = "";
        for(let i = 0; i < 3; i++) {
            for(let j = 0; j < 3; j++){
                const index = i * 3 + j;
                quadrado += numerosArray[index] + " ";
            }
            quadrado += "\n";
        }
        document.getElementById("quadrado").textContent = quadrado;
    } 
    else{
        document.getElementById("quadrado").textContent = "Não foi possível exibir o quadrado 3x3. Certifique-se de fornecer 9 números separados por espaço.";
    }
}

const numeros = prompt("Digite 9 números separados por espaço:");
const numerosArray = numeros.split(" ").map(Number);
exibirQuadrado3x3(numerosArray);