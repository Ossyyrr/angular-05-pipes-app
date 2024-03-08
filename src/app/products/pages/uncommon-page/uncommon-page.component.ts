import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css',
})
export class UncommonPageComponent {
  //i18n
  public name: string = 'Patri';
  public gender: 'male' | 'female' = 'female';

  public invitationMap = {
    male: 'Invitarlo',
    female: 'Invitarla',
  };

  public changeName(): void {
    this.name = 'Pepe';
    this.gender = 'male';
  }

  public clients: string[] = ['Paco', 'Pepe', 'Patri'];

  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos 1 cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    other: 'tenemos # clientes esperando',
  };

  public deleteClient() {
    this.clients.pop();
  }

  //ValueKey
  public person = {
    name: 'Patri',
    age: 25,
    address: 'Calle lalala 123',
  };

  // AsyncPipe
  public myObservableTimer: Observable<number> = interval(1000).pipe(
    tap((value) => {
      console.log('value', value);
    })
  );

  public promiseValue = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa');
    }, 3500);
  });
}
