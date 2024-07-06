import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoServicoService } from '../../services/tipo_servico/tipo-servico.service';
import { ITipoServico } from '../../interfaces/ITipoServico';
import { IServico } from '../../interfaces/IServico';
import { EstadoService } from '../../services/estado/estado.service';
import { IEstado } from '../../interfaces/IEstado';
import { IServicoCadastro } from '../../interfaces/IServicoCadastro';
import { ServicoService } from '../../services/servico/servico.service';

@Component({
  selector: 'app-cadastro-servico',
  templateUrl: './cadastro-servico.component.html',
  styleUrl: './cadastro-servico.component.css'
})
export class CadastroServicoComponent implements OnInit{
  usuarioId: string = '';
  turmaId: string = '';
  tipos: ITipoServico[] = [];
  servico: IServico = {
    tipo_id: '',
    empresa: '',
    cidade: '',
    estado_id: '',
    telefone_celular: '',
    valor: 0
  }
  estados: IEstado[] = [];

  constructor(private route: ActivatedRoute,
    private router: Router,
    private tipoServicoService: TipoServicoService,
    private estadoService: EstadoService,
    private servicoService: ServicoService
  ) {}

  ngOnInit(): void {
    const usuarioId: string | null = this.route.snapshot.paramMap.get('usuario_id');
    const turmaId: string | null = this.route.snapshot.paramMap.get('turma_id');
    if(usuarioId && turmaId) {
      this.findTipos();
      this.findEstados();
      this.usuarioId = usuarioId;
      this.turmaId = turmaId;
    }

  }

  cadastrarServico(): void {
    if(this.servico.estado_id && this.servico.tipo_id) {
      let servicoCadastro: IServicoCadastro = {
        tipo_id: '',
        empresa: '',
        cidade: '',
        estado_id: '',
        telefone_celular: '',
        valor: 0
      }

      servicoCadastro.tipo_id = this.servico.tipo_id;
      servicoCadastro.estado_id = this.servico.estado_id;
      servicoCadastro.cidade = this.servico.cidade;
      servicoCadastro.empresa = this.servico.empresa;
      servicoCadastro.telefone_celular = this.servico.telefone_celular;
      servicoCadastro.valor = this.servico.valor;

      this.servicoService.create(servicoCadastro).subscribe(() => {
        this.router.navigate([`/perfil/${this.usuarioId}/turma/${this.turmaId}`]);
      })
    }
  }

  private findTipos(): void {
    this.tipoServicoService.findAll().subscribe((tipos) => {
      this.tipos = tipos;
    })
  }

  private findEstados(): void {
    this.estadoService.findAll().subscribe((estados) => {
      this.estados = estados;
    })
  }
}
