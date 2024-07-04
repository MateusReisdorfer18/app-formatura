import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsuario } from '../../interfaces/IUsuario';
import { Environment } from '../../../environment';
import { IRecibo } from '../../interfaces/IRecibo';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor(private http: HttpClient) { }

  findAll(): Observable<IUsuario[]> {
    return this.http.get<IUsuario[]>(`${Environment.APIURL}/usuario`);
  }

  findAllRecibos(id: string): Observable<IRecibo[]> {
    return this.http.get<IRecibo[]>(`${Environment.APIURL}/usuario/${id}/recibo`);
  }

  findById(id: string): Observable<IUsuario> {
    return this.http.get<IUsuario>(`${Environment.APIURL}/usuario/${id}`);
  }

  create(usuario: IUsuario): Observable<IUsuario> {
    return this.http.post<IUsuario>(`${Environment.APIURL}/usuario`, usuario);
  }

  update(id: string, usuario: IUsuario): Observable<IUsuario> {
    return this.http.patch<IUsuario>(`${Environment.APIURL}/usuario/${id}`, usuario);
  }

  closeConta(id: string): Observable<Boolean> {
    return this.http.patch<Boolean>(`${Environment.APIURL}/usuario/${id}/fechar`, {});
  }

  delete(id: string): Observable<Boolean> {
    return this.http.delete<Boolean>(`${Environment.APIURL}/usuario/${id}`);
  }
}
