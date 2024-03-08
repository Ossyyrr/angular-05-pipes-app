import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css',
})
export class BasicsPageComponent {
  public myName: string = 'PatrIciA mANzAneRO';
  public customDate: Date = new Date();
}
