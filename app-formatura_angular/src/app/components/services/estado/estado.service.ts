import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEstado } from '../../interfaces/IEstado';
import { Environment } from '../../../environment';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {
  constructor(private http: HttpClient) { }

  findAll(): Observable<IEstado[]> {
    return this.http.get<IEstado[]>(`${Environment.APIURL}/estado`);
  }

  findById(id: string): Observable<IEstado> {
    return this.http.get<IEstado>(`${Environment.APIURL}/estado/${id}`);
  }

  create(estado: IEstado): Observable<IEstado> {
    return this.http.post<IEstado>(`${Environment.APIURL}/estado`, estado);
  }

  update(id: string, estado: IEstado): Observable<IEstado> {
    return this.http.patch<IEstado>(`${Environment.APIURL}/estado/${id}`, estado);
  }

  delete(id: string): Observable<Boolean> {
    return this.http.delete<Boolean>(`${Environment.APIURL}/estado/${id}`);
  }
}
