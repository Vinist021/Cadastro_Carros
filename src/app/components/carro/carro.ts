import { Component } from '@angular/core';
import { Carro } from '../../models/carro';

@Component({
  selector: 'app-carro',
  standalone: false,
  templateUrl: './carro.html',
  styleUrl: './carro.css'
})
export class CarroComponent {

  carro : Carro = {
    id: 1,
    nome: "Uno",
    montadora: "Fiat",
    preco: 4500,
    ano: 1985
  }

}
