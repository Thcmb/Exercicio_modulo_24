function Veiculo(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;

    this.acelerar = function() {
    console.log(`${this.marca} ${this.modelo} está acelerando.`);
    };
    this.frear = function() {
        console.log(`${this.marca} ${this.modelo} ${this.cor} está freando.`)
    };
}

function Carro(marca, modelo, cor) {
    Veiculo.call(this, marca, modelo);
    this.cor = cor;

    this.abrirPortas = function() {
        console.log(`${this.marca} ${this.modelo} está abrindo as portas.`)
    };
}

function Moto(marca, modelo, cilindradas) {
    Veiculo.call(this, marca, modelo);
    this.cilindradas = cilindradas;

    this.empinar = function() {
        console.log(`A ${this.marca} ${this.modelo} ${this.cilindradas} está empinando.`)
    };
}

const carro1 = new Carro("Toyota", "Corolla", "Prata");
const carro2 = new Carro("Honda", "Civic", "Preto");
const moto1 = new Moto("Yamaha", "MT-07", "700cc");

carro1.acelerar();
carro1.abrirPortas();
carro2.frear();
moto1.acelerar();
moto1.empinar();
