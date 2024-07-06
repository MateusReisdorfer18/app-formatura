import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IParcela } from '../../interfaces/IParcela';
import { Environment } from '../../../environment';
import { IRecibo } from '../../interfaces/IRecibo';

@Injectable({
  providedIn: 'root'
})
export class ParcelaService {
  constructor(private http: HttpClient) { }

  findAll(): Observable<IParcela[]> {
    return this.http.get<IParcela[]>(`${Environment.APIURL}/parcela`);
  }

  findById(id: string): Observable<IParcela> {
    return this.http.get<IParcela>(`${Environment.APIURL}/parcela/${id}`);
  }

  create(parcela: IParcela): Observable<IParcela> {
    return this.http.post<IParcela>(`${Environment.APIURL}/parcela`, parcela);
  }

  payParcela(parcelaId: string, turmaId: string): Observable<IRecibo> {
    return this.http.post<IRecibo>(`${Environment.APIURL}/parcela/${parcelaId}/recibo`, {turma_id: turmaId});
  }

  update(parcela: IParcela, id: string): Observable<IParcela> {
    return this.http.patch<IParcela>(`${Environment.APIURL}/parcela/${id}`, parcela);
  }

  delete(id: string): Observable<Boolean> {
    return this.http.delete<Boolean>(`${Environment.APIURL}/parcela/${id}`);
  }
}
