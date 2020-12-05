import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Modelo/Usuario';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {

  user:Usuario = new Usuario();
  constructor(private router:Router, private service:ServiceService){}


  ngOnInit(): void {
  }
  Guardar(){
    this.service.createUsuario(this.user)
    .subscribe(data=>{
      alert("Se añadio con éxito...");
      this.router.navigate(["listar"]);
    })
  }

}
