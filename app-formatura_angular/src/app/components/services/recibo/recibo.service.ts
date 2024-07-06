import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRecibo } from '../../interfaces/IRecibo';
import { Environment } from '../../../environment';

@Injectable({
  providedIn: 'root'
})
export class ReciboService {
  constructor(private http: HttpClient) { }

  findAll(): Observable<IRecibo[]> {
    return this.http.get<IRecibo[]>(`${Environment.APIURL}/recibo`);
  }

  findById(id: string): Observable<IRecibo> {
    return this.http.get<IRecibo>(`${Environment.APIURL}/recibo/${id}`);
  }

  delete(id: string): Observable<Boolean> {
    return this.http.delete<Boolean>(`${Environment.APIURL}/recibo/${id}`);
  }
}
