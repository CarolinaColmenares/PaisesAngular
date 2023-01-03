import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',

})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  buscar() {
    console.log(this.termino);

    this.paisService.buscarPais(this.termino)
    .subscribe((paises) => {
      this.hayError = false;
      
      this.paises = paises;
      console.log(paises);

      
    }, (err) => {
      this.hayError = true;
      this.paises = [];
    });

  }

}
