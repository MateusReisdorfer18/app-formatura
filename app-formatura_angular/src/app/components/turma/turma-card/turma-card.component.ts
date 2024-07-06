import { Component, Input, OnInit } from '@angular/core';
import { ITurma } from '../../interfaces/ITurma';
import { EstadoService } from '../../services/estado/estado.service';
import { TurmaService } from '../../services/turma/turma.service';
import { UsuarioService } from '../../services/usuario/usuario.service';

@Component({
  selector: 'app-turma-card',
  templateUrl: './turma-card.component.html',
  styleUrl: './turma-card.component.css'
})
export class TurmaCardComponent implements OnInit{
  @Input() turma: ITurma = {
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
  };
  @Input() usuarioId: string = '';

  constructor(
    private estadoService: EstadoService, 
    private turmaService: TurmaService,
    private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.findEstado();
  }

  private findEstado(): void {
    this.estadoService.findById(this.turma.estado_id).subscribe((estado) => {
      this.turma.estado = estado;
    })
  }

  solicitarConvite(): void {
    this.usuarioService.findById(this.usuarioId).subscribe((usuario) => {
      if(!usuario.turma_id)
        this.turmaService.addAluno(this.turma.id, this.usuarioId).subscribe();
    })
  }
}
