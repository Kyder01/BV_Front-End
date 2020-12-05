import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Modelo/Usuario';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  usuario:Usuario = new Usuario();
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
   this.Editar();
  }
  
  Editar(){
    let id=localStorage.getItem("id");
    this.service.getUsuarioById(Number(id))
    .subscribe(data =>{
      this.usuario=data;
    })
  }


  Actualizar(usuario:Usuario){
    console.log(this.usuario)
    this.service.updateUsuario(usuario)
    .subscribe(data =>{
      this.usuario=data;
      alert("Se actualizo con éxito...");
      this.router.navigate(["listar"]);
    })
  }
}
