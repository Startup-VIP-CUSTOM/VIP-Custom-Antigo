import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  api = 'http://localhost/API/login.php'
  contato = {
    "email": "",
    "senha": ""
  };
  constructor(private http: HttpClient, private router: Router, public alertController: AlertController) { }

  ngOnInit() {}

  lerContato() {
    this.http.get<any>(this.api+'?email='+this.contato.email+'&senha='+this.contato.senha).subscribe(async dados=>{
      this.contato=dados;
      if (dados != "" && dados != null && dados != undefined){
        this.router.navigate(['/modelo'])
      } else {
        const alert = await this.alertController.create({
          header: 'Login inválido', 
          buttons: ['Tente novamente']
        });
        await alert.present();
      }
    })
  }

}
