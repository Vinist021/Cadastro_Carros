import { Component } from '@angular/core';
import { Carro } from '../../models/carro';

@Component({
  selector: 'app-carros',
  standalone: false,
  templateUrl: './carros.html',
  styleUrl: './carros.css'
})
export class CarrosComponent {

  carros: Carro[] = [
    {
        id: 1,
        nome: "Uno",
        montadora: "Fiat",
        preco: 4500,
        ano: 1985
    },
    {
        id: 2,
        nome: "Fusca",
        montadora: "Wolkswagen",
        preco: 8000,
        ano: 1975
    },
    {
        id: 3,
        nome: "Opala",
        montadora: "Chevrolet",
        preco: 10000,
        ano: 1982
    }
  ];

}
