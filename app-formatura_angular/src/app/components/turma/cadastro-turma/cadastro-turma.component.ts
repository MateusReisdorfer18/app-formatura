import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EstadoService } from '../../services/estado/estado.service';
import { IEstado } from '../../interfaces/IEstado';
import { ITurma } from '../../interfaces/ITurma';
import { TurmaService } from '../../services/turma/turma.service';
import { ITurmaCadastro } from '../../interfaces/ITurmaCadastro';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { IUsuario } from '../../interfaces/IUsuario';

@Component({
  selector: 'app-cadastro-turma',
  templateUrl: './cadastro-turma.component.html',
  styleUrl: './cadastro-turma.component.css'
})
export class CadastroTurmaComponent implements OnInit{
    usuarioId: string = '';
    estados: IEstado[] = [];
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
    usuarios: IUsuario[] = [];

    constructor(private route: ActivatedRoute,
      private router: Router,
        private estadoService: EstadoService,
        private turmaService: TurmaService,
        private usuarioService: UsuarioService
    ) {}

    ngOnInit(): void {
      const usuarioId: string | null = this.route.snapshot.paramMap.get('usuario_id');
      if(usuarioId) {
        this.usuarioId = usuarioId;

        this.findEstados();
        this.findUsuarios();
      }
    }

    cadastrarTurma(): void {
      if(this.turma.estado && this.turma.estado.id) {
        let turmaCreate: ITurmaCadastro = {
          nome: '',
          universidade: '',
          cidade: '',
          estado_id: '',
          comissao_id: ''
        };

        turmaCreate.nome = this.turma.nome;
        turmaCreate.cidade = this.turma.cidade;
        turmaCreate.universidade = this.turma.universidade;
        turmaCreate.estado_id = this.turma.estado.id;
        turmaCreate.comissao_id = this.turma.comissao.id;

        this.turmaService.create(turmaCreate).subscribe(() => {
          this.router.navigate([`perfil/${this.usuarioId}/turma`])
        })
      }
    }

    private findUsuarios(): void {
      this.usuarioService.findAll().subscribe((usuarios) => {
        this.usuarios = usuarios;
      })
    }

    private findEstados(): void {
      this.estadoService.findAll().subscribe((estados) => {
        this.estados = estados;
      })
    }
}
