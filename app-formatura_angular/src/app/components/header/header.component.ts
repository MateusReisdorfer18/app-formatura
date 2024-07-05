import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent{
  @Input() lastRoute: string = '';
  showMenu: boolean = false;

  constructor(private router: Router) {}

  backToPerfil(): void {
    if(this.lastRoute !== '')
      this.router.navigate([this.lastRoute]);
  }
}
