import { Component, OnInit } from '@angular/core';
import { ITurma } from '../../interfaces/ITurma';
import { TurmaService } from '../../services/turma/turma.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscar-turma',
  templateUrl: './buscar-turma.component.html',
  styleUrl: './buscar-turma.component.css'
})
export class BuscarTurmaComponent implements OnInit{
  lastRoute: string = '';
  turmas: ITurma[] = [];

  constructor(private turmaService: TurmaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const lastRoute: string | undefined = this.router.lastSuccessfulNavigation?.previousNavigation?.initialUrl.toString();
      if(lastRoute)
        this.lastRoute = lastRoute;
    this.findAllTurmas();
  }

  private findAllTurmas(): void {
    this.turmaService.findAll().subscribe((turmas) => {
      this.turmas = turmas;
    })
  }
}
