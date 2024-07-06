import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent{
  @Input() usuarioId: string = '';
  showMenu: boolean = false;

  constructor(private router: Router) {}

  backToPerfil(): void {
    if(this.usuarioId !== '')
      this.router.navigate([`/perfil/${this.usuarioId}`]);
  }
}
