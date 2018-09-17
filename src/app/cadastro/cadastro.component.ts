import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuariosService } from '../usuarios.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  
  usuario: Usuario;
  
  constructor(
    private service: UsuariosService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.usuario = new Usuario(0, '', 0, '', 0);
    this.service.getUsuarios().subscribe(data => {
      this.usuario.id = ( data.length + 1 );
    })
  }

  cadastrar(): any {
    this.service.setUsuario(this.usuario)
      .subscribe(res => this.router.navigate(['/listagem', 'cadastrado']));
  }
}
