
// 1.Construa uma classe Pessoa, contendo algumas propriedades, como nome, idade e sexo e um método apresenta(),
// que exiba uma mensagem de apresentação com os dados desta pessoa.

class Pessoa {
    nome;
    idade;
    sexo;
 
    apresentar() {
      console.log("Olá! Meu nome é " + this.nome + " e tenho " + this.idade + " anos e meu sexo é " + this.sexo);
    }
  }

let pessoa1 = new Pessoa();
 
pessoa1.nome = "Laís";
pessoa1.idade = 18;
pessoa1.sexo = "feminino";

pessoa1.apresentar();


// 2.Construa uma classe Retangulo, contendo as propriedades altura e largura, e um método area() ou calculaArea().
// A área de um retângulo é dada pela seguinte fórmula: A = b * h, onde A representa área, b representa base e h representa altura.

class Retangulo {
    altura;
    largura;
    area;
   
        calcularArea() {
          this.area = this.largura * this.altura;
         
        }

        apresentar(){
            console.log("A área do retangulo é igual a " + this.area)
        }
    }

let retangulo1 = new Retangulo();

retangulo1.altura = 5;
retangulo1.largura = 8;

retangulo1.calcularArea()
retangulo1.apresentar();