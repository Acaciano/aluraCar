import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';

// importando o StatusBar e SplashScreen de um novo namespace
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AgendamentosPage } from '../pages/agendamentos/agendamentos';
import { LoginPage } from '../pages/login/login';
import { PerfilPage } from '../pages/perfil/perfil';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = LoginPage;

  public paginas = [
    { titulo: 'Agendamentos', componente: AgendamentosPage },
    { titulo: 'Perfil', componente: PerfilPage }
  ];

  @ViewChild(Nav) public nav: Nav;

 // injetando uma instâncias de SplashScreen e StartusBar!
  constructor(
      platform: Platform, 
      public splashscreen: SplashScreen,
      public statusBar: StatusBar) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

     // ATENÇÃO! USANDO AS INSTÂNCIAS, NÃO É MAIS O MÉTODO ESTÁTICO DA CLASSE
      statusBar.styleDefault();
      splashscreen.hide();
    });
  }

  abrePagina(pagina) {

    this.nav.push(pagina.componente);
  }
}