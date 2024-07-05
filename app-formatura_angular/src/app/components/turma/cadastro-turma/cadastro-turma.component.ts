import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EstadoService } from '../../services/estado/estado.service';
import { IEstado } from '../../interfaces/IEstado';
import { ITurma } from '../../interfaces/ITurma';
import { TurmaService } from '../../services/turma/turma.service';
import { ITurmaCadastro } from '../../interfaces/ITurmaCadastro';

@Component({
  selector: 'app-cadastro-turma',
  templateUrl: './cadastro-turma.component.html',
  styleUrl: './cadastro-turma.component.css'
})
export class CadastroTurmaComponent implements OnInit{
    lastRoute: string = '';
    estados: IEstado[] = [];
    turma: ITurma = {
      nome: '',
      universidade: '',
      cidade: '',
      estado_id: ''
    }

    constructor(private router: Router,
        private estadoService: EstadoService,
        private turmaService: TurmaService
    ) {}

    ngOnInit(): void {
      const lastRoute: string | undefined = this.router.lastSuccessfulNavigation?.previousNavigation?.initialUrl.toString();
      if(lastRoute)
        this.lastRoute = lastRoute;

      this.findEstados();
    }

    private findEstados(): void {
      this.estadoService.findAll().subscribe((estados) => {
        this.estados = estados;
      })
    }

    cadastrarTurma(): void {
      if(this.turma.estado && this.turma.estado.id) {
        let turmaCreate: ITurmaCadastro = {
          nome: '',
          universidade: '',
          cidade: '',
          estado_id: ''
        };

        turmaCreate.nome = this.turma.nome;
        turmaCreate.cidade = this.turma.cidade;
        turmaCreate.universidade = this.turma.universidade;
        turmaCreate.estado_id = this.turma.estado.id;

        this.turmaService.create(turmaCreate).subscribe(() => {
          this.router.navigate(['/turma'])
        })
      }
    }
}
