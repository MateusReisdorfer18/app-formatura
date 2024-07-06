import { Component, Input, OnInit } from '@angular/core';
import { ITurma } from '../../interfaces/ITurma';
import { IUsuario } from '../../interfaces/IUsuario';
import { IEvento } from '../../interfaces/IEvento';
import { TurmaService } from '../../services/turma/turma.service';

@Component({
  selector: 'app-turma-comissao',
  templateUrl: './turma-comissao.component.html',
  styleUrl: './turma-comissao.component.css'
})
export class TurmaComissaoComponent implements OnInit{
  @Input() usuarioId:string = '';
  @Input() turma: ITurma = {
    id: '',
    comissao: {
      nome: '',
      login: '',
      senha: '',
      cpf: ''
    },
    nome: '',
    universidade: '',
    cidade: '',
    estado_id: ''
  }
  @Input() usuario: IUsuario = {
    nome: '',
    login: '',
    senha: '',
    cpf: ''
  }
  turmaHasEvento: boolean = false;
  evento: IEvento = {
    id: '',
    data: new Date(),
    convidados: 0,
    valor: 0
  }

  constructor(private turmaService: TurmaService) {}

  ngOnInit(): void {
    if(this.turma.evento_id)
      this.findEvento(this.turma.evento_id);
  }

  private findEvento(eventoId: string): void {
    this.turmaService.findEvento(eventoId).subscribe((evento) => {
      this.turma.evento = evento;
    })
  }
}
