import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CadastroComponent } from './components/login/cadastro/cadastro.component';
import { EntrarComponent } from './components/login/entrar/entrar.component';
import { HeaderComponent } from './components/header/header.component';
import { CadastroTurmaComponent } from './components/turma/cadastro-turma/cadastro-turma.component';
import { TurmaComponent } from './components/turma/turma/turma.component';
import { BuscarTurmaComponent } from './components/turma/buscar-turma/buscar-turma.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { TurmaCardComponent } from './components/turma/turma-card/turma-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    EntrarComponent,
    HeaderComponent,
    CadastroTurmaComponent,
    TurmaComponent,
    BuscarTurmaComponent,
    PerfilComponent,
    TurmaCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
