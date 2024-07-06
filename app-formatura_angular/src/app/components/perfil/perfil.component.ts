import { Component } from '@angular/core';
import { IUsuario } from '../interfaces/IUsuario';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../services/usuario/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {
  usuario: IUsuario = {
    id: '',
    nome: '',
    login: '',
    senha: '',
    cpf: ''
  }

  constructor(private route: ActivatedRoute,
    private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    const id: string | null = this.route.snapshot.paramMap.get("id");
    if(id) {
      this.usuarioService.findById(id).subscribe((usuario) => {
        this.usuario = usuario;
      })
    }
  }
}
