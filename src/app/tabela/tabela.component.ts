import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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

  constructor(
    private service: UsuariosService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.flag = false;

    if (this.route.snapshot.paramMap.get('msg') !== null) {
      this.flag = true;
    }

    this.service.getUsuarios().subscribe((data: Array<Object>) => {
      this.usuarios = data;
    });
  }

}
