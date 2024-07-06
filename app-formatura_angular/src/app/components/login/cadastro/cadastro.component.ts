import { Component } from '@angular/core';
import { IUsuario } from '../../interfaces/IUsuario';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  usuarioCadastro: IUsuario = {
    nome: '',
    login: '',
    senha: '',
    cpf: '',
  };
  confirmarSenha: string = '';

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  cadastrarUsuario(): void {
    if(this.usuarioCadastro.senha === this.confirmarSenha && this.validarCpf(this.usuarioCadastro.cpf)) {
      this.usuarioService.create(this.usuarioCadastro).subscribe((usuario) => {
        if(usuario)
          this.router.navigate(["/login"])
      });
    }

    return;
  }

  private validarCpf(cpf: string): boolean {
    return cpf.length === 11;
  }
}
