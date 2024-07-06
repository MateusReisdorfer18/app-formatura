import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IServico } from '../../interfaces/IServico';
import { Environment } from '../../../environment';
import { IServicoCadastro } from '../../interfaces/IServicoCadastro';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {
  constructor(private http: HttpClient) { }

  findAll(): Observable<IServico[]> {
    return this.http.get<IServico[]>(`${Environment.APIURL}/servico`);
  }

  findById(id: string): Observable<IServico> {
    return this.http.get<IServico>(`${Environment.APIURL}/servico/${id}`);
  }

  create(servico: IServicoCadastro): Observable<IServico> {
    return this.http.post<IServico>(`${Environment.APIURL}/servico`, servico);
  }

  update(servico: IServico, id: string): Observable<IServico> {
    return this.http.patch<IServico>(`${Environment.APIURL}/servico/${id}`, servico);
  }

  updateSituacao(id: string): Observable<Boolean> {
    return this.http.patch<Boolean>(`${Environment.APIURL}/servico/${id}/situacao`, {});
  }

  delete(id: string): Observable<Boolean> {
    return this.http.delete<Boolean>(`${Environment.APIURL}/servico/${id}`);
  }
}
