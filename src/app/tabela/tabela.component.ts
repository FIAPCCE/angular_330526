import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { UsuarioPipe } from '../usuario.pipe';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent implements OnInit {

  private usuarios: Array<Object> = [];
  private query: string;
  private flag: boolean;
  private msg: string;

  constructor(
    private service: UsuariosService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.flag = false;
    this.msg = this.route.snapshot.paramMap.get('msg');

    if (this.msg !== null) {
      this.flag = true;
    }

    this.service.getUsuarios().subscribe((data: Array<Object>) => {
      this.usuarios = data;
    });
  }

  remover(id): any {
    let conf = confirm('Deseja remover este usuário?');

    if (conf) {
      this.service.removeUsuario(id).subscribe(
        data => {
          alert('Usuario removido com sucesso!');
          this.router.navigate(['/usuarios/lista']);
        }
      )
    }
  }

}
