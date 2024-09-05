import PromptSync from "prompt-sync";
const prompt = PromptSync();


class Produto {
    nome: string;
    tipo: string;

    constructor(nome: string, tipo: string) {
        this.nome = nome;
        this.tipo = tipo;
    }

    apresentar(): void {
        console.log(`Olá, o produto é ${this.nome} e do tipo ${this.tipo}.`);
    }
}


// Testando as classes

const nome:string = prompt("informe seu nome: ");
const tipo:string = prompt ("informe o tipo: ");

const produto = new Produto ("p1","tipo");
produto.apresentar();
