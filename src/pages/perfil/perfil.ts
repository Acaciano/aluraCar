import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UsuarioService } from '../../domain/usuario/usuario-service';
import { Camera } from '@ionic-native/camera';

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html'
})
export class PerfilPage implements OnInit {

  public url: string;

  // INJETANDO UMA INSTÂNCIA DA CÂMERA
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private _service: UsuarioService,
    public camera: Camera) {}

    get usuarioLogado() {

      return this._service.obtemUsuarioLogado();
    }

    ngOnInit() {

      this.url = this._service.obtemAvatar();
    }

    tiraFoto() {

      // USANDO A INSTÂNCIA DA CÂMERA AO INVÉS DO MÉTODO ESTÁTICO DA CLASSE

      this.camera.getPicture({
        destinationType: this.camera.DestinationType.FILE_URI,
        saveToPhotoAlbum: true, 
        correctOrientation: true
      }).then(url => {
        this._service.guardaAvatar(url);
        this.url = url;
      })
      .catch(err => console.log(err));
    }
}