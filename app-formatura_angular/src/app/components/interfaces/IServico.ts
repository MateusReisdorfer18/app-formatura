import { IEstado } from "./IEstado";
import { IEvento } from "./IEvento";
import { ITipoServico } from "./ITipoServico";

export interface IServico {
    id?: string;
    tipo?: ITipoServico;
    tipo_id: string;
    empresa: string;
    observacao?: string;
    cidade: string;
    estado?: IEstado;
    estado_id: string;
    telefone_celular: string;
    telefone_fixo?: string;
    valor: number;
    situacao?: boolean;
    eventos?: IEvento[]
}