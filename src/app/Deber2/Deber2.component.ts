import { Component } from '@angular/core';

@Component({
  selector: 'app-deber2',  // Aunque esto no es un error, en Angular es común utilizar 'camelCase' para nombres de componentes
  standalone: true,
  imports: [],
  templateUrl: './Deber2.component.html',
  styleUrls: ['./Deber2.component.scss']  // Debe ser 'styleUrls' (en plural)
})
export class Deber2Component {
}
