import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  qtd: number;

  constructor(private service: UsuariosService) { }

  ngOnInit() {
    this.service.getUsuarios().subscribe((data) => {
      this.qtd = data.length;
    })
  }

}
