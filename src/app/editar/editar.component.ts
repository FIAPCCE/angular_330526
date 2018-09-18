import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {
  private usuario: Usuario;

  constructor(
    private service: UsuariosService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.usuario = new Usuario(0, '', 0, '', 0);
    let id = this.route.snapshot.paramMap.get('id');
    
    this.service.getUsuario(id).subscribe(
      data => this.usuario = data,
      err => this.router.navigate(['/usuarios/lista'])
    );
  }

  editar(): any {
    this.service.updateUsuario(this.usuario.id, this.usuario)
      .subscribe(
        data => this.router.navigate(['/usuarios/lista', 'editado']),
        err => console.log(err)
      );
  }
}
