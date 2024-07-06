import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEvento } from '../../interfaces/IEvento';
import { Environment } from '../../../environment';
import { IServico } from '../../interfaces/IServico';
import { IEventoServico } from '../../interfaces/IEventoServico';

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  constructor(private http: HttpClient) { }

  findAll(): Observable<IEvento[]> {
    return this.http.get<IEvento[]>(`${Environment.APIURL}/evento`);
  }

  findAllServicos(eventoId: string): Observable<IEventoServico[]> {
    return this.http.get<IEventoServico[]>(`${Environment.APIURL}/evento/${eventoId}/servico`)
  }

  findById(id: string): Observable<IEvento> {
    return this.http.get<IEvento>(`${Environment.APIURL}/evento/${id}`);
  }

  findServico(eventoId: string, servicoId: string): Observable<IServico> {
    return this.http.get<IServico>(`${Environment.APIURL}/evento/${eventoId}/servico/${servicoId}`);
  }

  create(evento: IEvento): Observable<IEvento> {
    return this.http.post<IEvento>(`$${Environment.APIURL}/evento`, evento);
  }

  addServico(eventoId: string, servicoId: string): Observable<IServico> {
    return this.http.post<IServico>(`${Environment.APIURL}/evento/${eventoId}/servico`, {servico_id: servicoId});
  }

  update(evento: IEvento, id: string): Observable<IEvento> {
    return this.http.patch<IEvento>(`${Environment.APIURL}/evento/${id}`, evento);
  }

  delete(id: string): Observable<Boolean> {
    return this.http.delete<Boolean>(`${Environment.APIURL}/evento/${id}`);
  }

  removeServico(eventoId: string, servicoId: string): Observable<Boolean> {
    return this.http.delete<Boolean>(`${Environment.APIURL}/evento/${eventoId}/servico/${servicoId}`);
  }
}
