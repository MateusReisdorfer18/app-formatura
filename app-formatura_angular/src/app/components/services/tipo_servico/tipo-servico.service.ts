import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITipoServico } from '../../interfaces/ITipoServico';
import { Environment } from '../../../environment';

@Injectable({
  providedIn: 'root'
})
export class TipoServicoService {
  constructor(private http: HttpClient) { }

  findAll(): Observable<ITipoServico[]> {
    return this.http.get<ITipoServico[]>(`${Environment.APIURL}/tipo-servico`);
  }

  findById(id: string): Observable<ITipoServico> {
    return this.http.get<ITipoServico>(`${Environment.APIURL}/tipo-servico/${id}`);
  }

  create(tipoServico: ITipoServico): Observable<ITipoServico> {
    return this.http.post<ITipoServico>(`${Environment.APIURL}/tipo-servico`, tipoServico);
  }

  update(id: string, tipoServico: ITipoServico): Observable<ITipoServico> {
    return this.http.patch<ITipoServico>(`${Environment.APIURL}/tipo-servico/${id}`, tipoServico);
  }

  delete(id: string): Observable<Boolean> {
    return this.http.delete<Boolean>(`${Environment.APIURL}/tipo-servico/${id}`);
  }
}
