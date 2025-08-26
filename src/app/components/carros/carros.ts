import { Component } from '@angular/core';
import { Carro } from '../../models/carro';

@Component({
  selector: 'app-carros',
  standalone: false,
  templateUrl: './carros.html',
  styleUrl: './carros.css'
})
export class CarrosComponent {

  carro: Carro = {} as Carro;
  contadorId: number = 4;
  ehAtualizacao: boolean = false;

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

  salvarCarro(){
    if(!this.ehAtualizacao){
      this.carro.id = this.contadorId
      this.contadorId++;
      this.carros.push(this.carro);
    }

    this.carro = {} as Carro;
    this.ehAtualizacao = false;
  } 

  atualizar(carroSelecionado: Carro){
    this.carro = carroSelecionado;
    this.ehAtualizacao = true;
  }

  remover(carroRemover: Carro){
    this.carros = this.carros.filter(c => c !== carroRemover);
    this.carro = {} as Carro;
    this.ehAtualizacao = false;
  }

}
