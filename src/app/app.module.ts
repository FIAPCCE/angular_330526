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

// Rotas
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'listagem', component: TabelaComponent },
  { path: 'listagem/:msg', component: TabelaComponent },
  { path: 'cadastro', component: CadastroComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TabelaComponent,
    UsuarioPipe,
    HomeComponent,
    CadastroComponent
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
