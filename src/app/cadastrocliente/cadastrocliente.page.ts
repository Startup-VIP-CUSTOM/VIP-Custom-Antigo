import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadastrocliente',
  templateUrl: './cadastrocliente.page.html',
  styleUrls: ['./cadastrocliente.page.scss'],
})
export class CadastroclientePage implements OnInit {
  id:string;
  api = 'http://localhost/API/'
  contato = {
    "id": 0,
    "nome": "",
    "email": "",
    "cpf": "",
    "cidade": "",
    "senha": ""
  };
  constructor(private http: HttpClient, private navCtrl: NavController) {}

  ngOnInit() {}

  registrar() {
    this.http.post<any>(this.api+'inclusao.php', this.contato).subscribe(dados=>{
      this.navCtrl.navigateBack('/login');
    });
  }

}
