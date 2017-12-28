import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { UsuarioService } from '../../domain/usuario/usuario-service';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  public email: string = 'joao@alura.com.br';
  public senha: string = 'alura123';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private _service: UsuarioService, 
    private _alertCtrl: AlertController) {}

  efetuaLogin() { 

    this._service
      .efetuaLogin(this.email, this.senha)
      .then(usuario => {
        console.log(usuario);
        this.navCtrl.setRoot(HomePage)
      })
      .catch(() => {
        this._alertCtrl.create({
          title: 'Problema no login',
          subTitle: 'Email ou senha inválidos. Verifique',
          buttons: [{ text: 'Ok'}]
        }).present();
      });
  }
}
