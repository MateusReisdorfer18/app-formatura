import { Component, OnInit } from '@angular/core';
import { ITurma } from '../../interfaces/ITurma';
import { TurmaService } from '../../services/turma/turma.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-buscar-turma',
  templateUrl: './buscar-turma.component.html',
  styleUrl: './buscar-turma.component.css'
})
export class BuscarTurmaComponent implements OnInit{
  usuarioId: string = '';
  turmas: ITurma[] = [];

  constructor(private turmaService: TurmaService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const usuarioId: string | null = this.route.snapshot.paramMap.get('usuario_id');
      if(usuarioId)
        this.usuarioId = usuarioId;
    this.findAllTurmas();
  }

  private findAllTurmas(): void {
    this.turmaService.findAll().subscribe((turmas) => {
      this.turmas = turmas;
    })
  }
}
