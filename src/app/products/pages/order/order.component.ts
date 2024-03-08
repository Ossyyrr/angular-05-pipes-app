import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css',
})
export class OrderComponent {
  public exampleText: string = 'HeLLo WORld';

  public isUpperCase: boolean = false;
  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  public heroes: Hero[] = [
    { name: 'Superman', canFly: true, color: Color.blue },
    { name: 'Batman', canFly: false, color: Color.black },
    { name: 'Daredevil', canFly: false, color: Color.red },
    { name: 'Robin', canFly: false, color: Color.green },
    { name: 'Lobezno', canFly: false, color: Color.yellow },
  ];

  public sortBy?: keyof Hero;

  public sortByValue(value: keyof Hero): void {
    this.sortBy = value;
  }
}
