import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private apiKey: string='JnYb6uJagifeKMAaSnQZgMPzGBR7VFGk';
  private urlBase: string='https://api.giphy.com/v1/gifs';

 private _historial: string[]=[];

//  TODO:Cambiar any por su tipo correspondiente

 public resultados: Gif []=[];


 get historial(){
  return [...this._historial]
 }

 constructor(private http: HttpClient){
  //Inicio el historial con el local storage guardado, si esta vacio le paso un arreglo vacio
  this._historial= JSON.parse(localStorage.getItem('historial')!)||[];
  this.resultados= JSON.parse(localStorage.getItem('result')!)||[];
 }

 async buscarGifs(query: any){
  //Paso el parametro para guardarlo en lower case
  query=query.trim().toLocaleLowerCase();
  //Si ya existe, no lo guardo
  if(!this._historial.includes(query) && query!=''){
  //el 'unshift' sirve para agregar primero en el arreglo, en este caso el arreglo es _historial
  this._historial.unshift(query);
  //Muestro solo los 10 ultimas consultas
  this._historial=this._historial.splice(0,10);

  localStorage.setItem('historial',JSON.stringify(this._historial));

  }

  const params = new HttpParams()
                .set('api_key',this.apiKey)
                .set('limit','10')
                .set('q',query);

  this.http.get<SearchGifsResponse>(`${this.urlBase}/search`,{params})
        .subscribe((resp) => {
          console.log(resp.data);
          this.resultados= resp.data;
          localStorage.setItem('result',JSON.stringify(this.resultados));
          
        })
  
  //muestro en consola el arreglo
  // console.log(this._historial)
 }
}
