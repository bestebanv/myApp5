import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {

  items = [
    { title: 'Usuario 1' },
    { title: 'Usuario 2' },
    { title: 'Usuario 3' },
    { title: 'Usuario 4' },
    { title: 'Usuario 5' },
    { title: 'Usuario 6' },
    { title: 'Usuario 7' },
    { title: 'Usuario 8' },
  ];
  constructor() { }

  ngOnInit() {
  }

}
