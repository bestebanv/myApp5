import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})

export class UsuariosService {

  constructor( private http: HttpClient ) { }

  getUsers(){

    return this.http.get(`${ URL }/api/usuario/list`);

  }

}
