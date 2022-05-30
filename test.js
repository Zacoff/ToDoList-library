import {Pessoa} from './functions/Table.js'

class Funcionario extends Pessoa {
    constructor(name,cpf,cod) {
        super(name,cpf)
        this._cod = cod
    }
}

class Visitante extends Pessoa {
    constructor (name,cpf,setor) {
        super(name,cpf)
        this._setorVisita = setor
    }
}

const newFunc = new Funcionario('Daniel',97054,45)
const newVisitant = new Visitante('Jean',984894,'adm')

console.log(newVisitant)