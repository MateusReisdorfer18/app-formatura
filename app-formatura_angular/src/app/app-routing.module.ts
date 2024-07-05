import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './components/login/cadastro/cadastro.component';
import { EntrarComponent } from './components/login/entrar/entrar.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { CadastroTurmaComponent } from './components/turma/cadastro-turma/cadastro-turma.component';
import { TurmaComponent } from './components/turma/turma/turma.component';
import { BuscarTurmaComponent } from './components/turma/buscar-turma/buscar-turma.component';

const routes: Routes = [
  {path: "login", component: EntrarComponent},
  {path: "login/cadastro", component: CadastroComponent},
  {path: "perfil/:id", component: PerfilComponent},
  {path: "turma/cadastro", component: CadastroTurmaComponent},
  {path: "turma/:id", component: TurmaComponent},
  {path: "turma", component: BuscarTurmaComponent},
  {path: "", redirectTo: "login", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
