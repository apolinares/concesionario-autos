import { Injectable } from '@angular/core';

export interface Car{
  id:number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
}

@Injectable({
  providedIn: 'root'
})


export class Cars {
  private cars:Car[] = [
    {
      id: 1,
      nombre: 'Deportivo Alto',
      descripcion : 'Ideal para ciudad',
      precio: 145500,
      imagen: '/img/car-63930.webp'
    },
    {
      id: 2,
      nombre: 'Ferrari',
      descripcion: 'Potente y elegante',
      precio: 999200,
      imagen: '/img/ferrari-627586.webp'
    },
    {
      id: 3,
      nombre: 'Deportivo con puertas tipo mariposa',
      descripcion: 'Moderna, económica y Veloz',
      precio: 333900,
      imagen: '/img/car-5954530.webp'
    },
    {
      id: 4,
      nombre: 'Suzuki Convertible',
      descripcion: 'Moderna y muy económica',
      precio: 813900,
      imagen: '/img/car-218113_1920.webp'
    }
  ]
  constructor(){}
  getCars():Car[]{
    return this.cars;
  }
}
