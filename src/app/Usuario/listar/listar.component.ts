import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Modelo/Usuario';
import { ServiceService } from '../../Service/service.service'

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  nuevoUsuario:Usuario;
  usuarios: Usuario[] = [];
  constructor(private service:ServiceService, private router:Router) {
    this.nuevoUsuario = new Usuario;
  }

  ngOnInit() {
    this.service.getUsuarios()
    .subscribe(data =>{
      this.usuarios=data;
      console.log(this.usuarios)
    })
  }

  Editar(usuario:Usuario){
    localStorage.setItem("id",usuario.id.toString());
    this.router.navigate(["update"]);

  }

  Delete(usuario:Usuario){
    this.service.deleteUsuario(usuario)
    .subscribe(data =>{
      this.usuarios=this.usuarios.filter(p=>p!==usuario);
      alert("Usuario eliminado...")
    })
  }

}
