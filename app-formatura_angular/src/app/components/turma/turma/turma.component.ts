import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ITurma } from '../../interfaces/ITurma';
import { TurmaService } from '../../services/turma/turma.service';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { ITurmaEventos } from '../../interfaces/ITurmaEventos';
import { EventoService } from '../../services/evento/evento.service';
import { IEvento } from '../../interfaces/IEvento';
import { IUsuario } from '../../interfaces/IUsuario';

@Component({
  selector: 'app-turma',
  templateUrl: './turma.component.html',
  styleUrl: './turma.component.css'
})
export class TurmaComponent implements OnInit{
  isComissao: boolean = false;
  usuarioId:string = '';
  turma: ITurma = {
    id: '',
    nome: '',
    universidade: '',
    cidade: '',
    estado_id: '',
    comissao: {
      id: '',
      nome: '',
      login: '',
      senha: '',
      cpf: ''
    }
  }
  evento: IEvento = {
    id: '',
    data: new Date(),
    convidados: 0,
    valor: 0
  };
  usuario: IUsuario = {
    nome: '',
    login: '',
    senha: '',
    cpf: ''
  }
  turmaHasEvento: boolean = false;

  constructor(private router: Router, 
    private route: ActivatedRoute, 
    private turmaService: TurmaService,
    private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    const turmaId = this.route.snapshot.paramMap.get('turma_id');
    const usuarioId = this.route.snapshot.paramMap.get('usuario_id');
    if(turmaId && usuarioId) {
      this.findTurma(turmaId);
      this.findUsuario(usuarioId);
      if(this.turma.evento_id)
        this.findEvento(this.turma.evento_id);
    }
  }

  private findUsuario(usuarioId: string): void {
    this.usuarioService.findById(usuarioId).subscribe((usuario) => {
      if(usuario.is_comissao)
        this.isComissao = true;

      this.usuarioId = usuarioId;
      this.usuario = usuario;
    })
  }

  private findTurma(turmaId: string): void {
    this.turmaService.findById(turmaId).subscribe((turma) => {
      this.turma = turma;
    })
  }

  private findEvento(eventoId: string): void {
    this.turmaService.findEvento(eventoId).subscribe((evento) => {
      this.turma.evento = evento;
    })
  }
}
