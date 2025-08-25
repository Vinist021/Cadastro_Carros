import { Component, Input } from '@angular/core';
import { Carro } from '../../models/carro';

@Component({
  selector: 'app-carro',
  standalone: false,
  templateUrl: './carro.html',
  styleUrl: './carro.css'
})
export class CarroComponent {

  @Input()
  carro : Carro = {} as Carro;

}
