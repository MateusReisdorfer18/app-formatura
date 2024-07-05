import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ITurma } from '../../interfaces/ITurma';
import { TurmaService } from '../../services/turma/turma.service';

@Component({
  selector: 'app-turma',
  templateUrl: './turma.component.html',
  styleUrl: './turma.component.css'
})
export class TurmaComponent implements OnInit{
  lastRoute: string = '';
  isComissao: boolean = false;
  turma: ITurma = {
    nome: '',
    universidade: '',
    cidade: '',
    estado_id: ''
  }

  constructor(private router: Router, 
    private route: ActivatedRoute, 
    private turmaService: TurmaService) {}

  ngOnInit(): void {
    const lastRoute = this.router.lastSuccessfulNavigation?.previousNavigation?.initialUrl.toString();
    if(lastRoute)
      this.lastRoute = lastRoute;

    const id = this.route.snapshot.paramMap.get('id');
    if(id) {
      this.turmaService.findById(id).subscribe((turma) => {
        this.turma = turma;
      })
    }
  }
}
