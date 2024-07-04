import { ITurma } from "./ITurma";
import { IUsuario } from "./IUsuario";

export interface IRecibo {
    id: string;
    turma?: ITurma;
    turma_id: string;
    comissao?: IUsuario;
    comissao_id: string;
    formando?: IUsuario;
    formando_id: string;
}