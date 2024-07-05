import { INumeroDeParcelas } from "./INumeroDeParcelas";
import { ITurma } from "./ITurma";

export interface IUsuario {
    id?: string;
    nome: string;
    login: string;
    senha: string;
    cpf: string;
    status?: boolean;
    isComissao?: boolean;
    numero_de_parcelas?: INumeroDeParcelas;
    numero_de_parcelas_id?: string;
    turma?: ITurma;
    turma_id?: string;
}