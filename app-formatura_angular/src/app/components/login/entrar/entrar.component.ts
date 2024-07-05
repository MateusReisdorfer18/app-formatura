import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { IUsuarioLogin } from '../../interfaces/IUsuarioLogin';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrl: './entrar.component.css'
})
export class EntrarComponent {
  usuario: IUsuarioLogin = {
    login: '',
    senha: ''
  }

  constructor(private ususarioService: UsuarioService, private router: Router) {}

  redirectTo(): void {
    this.router.navigate(['/login/cadastro'])
  }

  login(): void {
    this.ususarioService.findByLoginAndSenha(this.usuario).subscribe((usuario) => {
      if(usuario)
        this.router.navigate([`/perfil/${usuario.id}`])
    });
  }
}
