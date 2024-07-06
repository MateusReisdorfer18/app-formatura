import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './components/login/cadastro/cadastro.component';
import { EntrarComponent } from './components/login/entrar/entrar.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { CadastroTurmaComponent } from './components/turma/cadastro-turma/cadastro-turma.component';
import { TurmaComponent } from './components/turma/turma/turma.component';
import { BuscarTurmaComponent } from './components/turma/buscar-turma/buscar-turma.component';
import { CadastroServicoComponent } from './components/servico/cadastro-servico/cadastro-servico.component';

const routes: Routes = [
  {path: "login", component: EntrarComponent},
  {path: "login/cadastro", component: CadastroComponent},
  {path: "perfil/:id", component: PerfilComponent},
  {path: "perfil/:usuario_id/turma/cadastro", component: CadastroTurmaComponent},
  {path: "perfil/:usuario_id/turma/:turma_id", component: TurmaComponent},
  {path: "perfil/:usuario_id/turma", component: BuscarTurmaComponent},
  {path: "perfil/:usuario_id/turma/:turma_id/servico", component: CadastroServicoComponent},
  {path: "", redirectTo: "login", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
