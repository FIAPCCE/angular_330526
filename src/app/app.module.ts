import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { TabelaComponent } from './tabela/tabela.component';
import { UsuarioPipe } from './usuario.pipe';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EditarComponent } from './editar/editar.component';
import { ErroComponent } from './erro/erro.component';

// Rotas
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'usuarios/lista', component: TabelaComponent },
  { path: 'usuarios/lista/:msg', component: TabelaComponent },
  { path: 'usuarios/novo', component: CadastroComponent },
  { path: 'usuarios/:id', component: EditarComponent },
  { path: 'usuarios', redirectTo: 'usuarios/lista' },
  { path: '**', component: ErroComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TabelaComponent,
    UsuarioPipe,
    HomeComponent,
    CadastroComponent,
    EditarComponent,
    ErroComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
