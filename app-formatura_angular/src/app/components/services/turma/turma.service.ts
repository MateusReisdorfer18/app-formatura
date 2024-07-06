import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITurma } from '../../interfaces/ITurma';
import { Environment } from '../../../environment';
import { IUsuario } from '../../interfaces/IUsuario';
import { ITurmaCadastro } from '../../interfaces/ITurmaCadastro';
import { IEvento } from '../../interfaces/IEvento';
import { ITurmaEventos } from '../../interfaces/ITurmaEventos';

@Injectable({
  providedIn: 'root'
})
export class TurmaService {
  constructor(private http: HttpClient) { }

  findAll(): Observable<ITurma[]> {
    return this.http.get<ITurma[]>(`${Environment.APIURL}/turma`);
  }

  findAllAlunos(id: string): Observable<IUsuario[]> {
    return this.http.get<IUsuario[]>(`${Environment.APIURL}/turma/${id}/alunos`);
  }

  findEvento(evento_id: string): Observable<IEvento> {
    return this.http.get<IEvento>(`${Environment.APIURL}/turma/${evento_id}/evento`);
  }

  findById(id: string): Observable<ITurma> {
    return this.http.get<ITurma>(`${Environment.APIURL}/turma/${id}`);
  }

  create(turma: ITurmaCadastro): Observable<ITurma> {
    return this.http.post<ITurma>(`${Environment.APIURL}/turma`, turma);
  }

  update(id: string, turma: ITurma): Observable<ITurma> {
    return this.http.patch<ITurma>(`${Environment.APIURL}/turma/${id}`, turma);
  }

  addAluno(id: string, usuarioId: string): Observable<IUsuario> {
    return this.http.patch<IUsuario>(`${Environment.APIURL}/turma/${id}/alunos`, {aluno_id: usuarioId});
  }

  addComissao(turma_id: string, aluno_id: string): Observable<ITurma> {
    return this.http.patch<ITurma>(`${Environment.APIURL}/turma/${turma_id}/comissao`, {comissao_id: aluno_id});
  }

  alterStatus(turma_id: string): Observable<Boolean> {
    return this.http.patch<Boolean>(`${Environment.APIURL}/turma/${turma_id}/status`, {});
  }

  removeAluno(turma_id: string, aluno_id: string): Observable<Boolean> {
    return this.http.patch<Boolean>(`${Environment.APIURL}/turma/${turma_id}/alunos/${aluno_id}`, {});
  }

  removeComissao(turma_id: string): Observable<Boolean> {
    return this.http.patch<Boolean>(`${Environment.APIURL}/turma/${turma_id}/comissao/remove`, {});
  }

  delete(id: string): Observable<Boolean> {
    return this.http.delete<Boolean>(`${Environment.APIURL}/turma/${id}`);
  }
}
