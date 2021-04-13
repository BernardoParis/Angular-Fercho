import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

    heroes: string[] = ['Spiderman', 'Iroman', 'Hulk', 'Thor'];

    heroeBorrado: string ='';

    borrarHeroe() {
      
      this.heroeBorrado = this.heroes.shift() || '';
    }

  }


