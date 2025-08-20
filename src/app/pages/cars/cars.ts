import { Component } from '@angular/core';
import { Car } from '../../services/cars';
import { Cars } from '../../services/cars';


@Component({
  selector: 'app-cars',
  imports: [],
  templateUrl: './cars.html',
  styleUrl: './cars.css'
})

export class Autos {
  autos: Car[] = [];
  constructor(private auto:Cars){
    this.autos = this.auto.getCars();
  }
}

