import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../Modelo/Usuario';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  constructor(private http: HttpClient) { }

  url = 'http://localhost:8080';

  getUsuarios(){
    return this.http.get<Usuario[]>(this.url+"/test/getAll");
  }
  createUsuario(usuario:Usuario){
    return this.http.post<Usuario>(this.url+"/test/create",usuario);
  }
  getUsuarioById(id:number){
    return this.http.get<Usuario>(this.url+"/test/findById/"+id);
  }
  updateUsuario(usuario:Usuario){
    return this.http.put<Usuario>(this.url+"/test/update/"+usuario.id,usuario);
  }
  deleteUsuario(usuario:Usuario){
    return this.http.delete<Usuario>(this.url+"/test/deleteById/"+usuario.id)
  }
}
