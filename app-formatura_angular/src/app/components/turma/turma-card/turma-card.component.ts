import { Component, Input, OnInit } from '@angular/core';
import { ITurma } from '../../interfaces/ITurma';
import { EstadoService } from '../../services/estado/estado.service';

@Component({
  selector: 'app-turma-card',
  templateUrl: './turma-card.component.html',
  styleUrl: './turma-card.component.css'
})
export class TurmaCardComponent implements OnInit{
  @Input() turma!: ITurma;

  constructor(private estadoService: EstadoService) {}

  ngOnInit(): void {
    this.findEstado();
  }

  private findEstado(): void {
    this.estadoService.findById(this.turma.estado_id).subscribe((estado) => {
      this.turma.estado = estado;
    })
  }
}
