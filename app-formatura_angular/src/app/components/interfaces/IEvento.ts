import { IServico } from "./IServico";

export interface IEvento {
    id: string;
    data: Date;
    convidados: number;
    valor: number;
    servicos?: IServico[]
}