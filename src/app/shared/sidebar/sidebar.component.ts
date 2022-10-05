import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  get historialBusqueda(){
    return this.serviceGifs.historial;
  }

  GetSearchString(indice: number){
    //Capto el valor del item con el indice que recibo
    let nombre=this.historialBusqueda[indice]
    
    //Llamo al metodo 'buscarGifs' del servicio intectado en el constructor previamente
    this.serviceGifs.buscarGifs(nombre);
    //Vuelvo a vacio el input
    // this.txtBuscar.nativeElement.value='';
    


  }

  constructor(private serviceGifs :GifsService) { }

  
}
