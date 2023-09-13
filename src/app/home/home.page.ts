import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule]
})

export class HomePage {
  
  constructor() {}

  public resultado: String = "Resultado";
  public precoAlcool: string = ""
  public precoGasolina: string = ""

  calcular(){
    if( this.precoAlcool && this.precoGasolina ){

      var pAlcool = parseFloat(this.precoAlcool)
      var pGasolina = parseFloat(this.precoGasolina)

     var res = pAlcool / pGasolina

     if(res >= 0.7){
      this.resultado = "Melhor usar Gasolina!"
     }else{
      this.resultado = "Melhor usar Álcool!"
     }
    }else{
      this.resultado = "Preencha corretamente os campos!"
    }
  }
}
