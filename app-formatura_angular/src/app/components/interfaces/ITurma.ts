import { IEstado } from "./IEstado";
import { IUsuario } from "./IUsuario";

export interface ITurma {
    id: string;
    comissao?: IUsuario;
    comissao_id: string;
    nome: string;
    universidade: string;
    cidade: string;
    estado?: IEstado;
    estado_id: string;
    status: boolean;
    alunos?: IUsuario[]
}