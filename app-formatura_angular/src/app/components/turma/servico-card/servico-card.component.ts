import { Component, Input } from '@angular/core';
import { IServico } from '../../interfaces/IServico';

@Component({
  selector: 'app-servico-card',
  templateUrl: './servico-card.component.html',
  styleUrl: './servico-card.component.css'
})
export class ServicoCardComponent {
  @Input() servico: IServico = {
    id: '',
    tipo_id: '',
    empresa: '',
    cidade: '',
    estado_id: '',
    telefone_celular: '',
    valor: 0,
    situacao: false
  }
}
