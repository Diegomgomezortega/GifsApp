import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  //Busca en el html un elemento que tenga una referencia local
  //nombrada como 'txtBuscar'
  //el '!' dice a Angular que esa propiedad no va a ser nula, si la sacamos,, se puede visualizar el error si no lo ponemos
  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;
  constructor(private servicegifs:GifsService){}

  searchEvent(){
    //Capto el valor del input
    const texto= this.txtBuscar.nativeElement.value;
    //Escribo en consola el valor
    //console.log(texto)
    //Llamo al metodo 'buscarGifs' del servicio intectado en el constructor previamente
    this.servicegifs.buscarGifs(texto)
    //Vuelvo a vacio el input
    this.txtBuscar.nativeElement.value='';
    


  }

}
