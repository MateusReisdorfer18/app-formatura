import { IRecibo } from "./IRecibo";
import { IUsuario } from "./IUsuario";

export interface IParcela {
    id: string;
    formando?: IUsuario;
    formando_id: string;
    numero: number;
    valor: number;
    situacao: boolean;
    recibo?: IRecibo;
    recibo_id?: string;
}