import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personalizacao',
  templateUrl: './personalizacao.page.html',
  styleUrls: ['./personalizacao.page.scss'],
})
export class PersonalizacaoPage implements OnInit {

  constructor() { }
  clickCaneca() {
    (document.getElementById('image') as HTMLImageElement).src = "assets/img/caneca.jpg"
  }
  clickCamiseta() {
    (document.getElementById('image') as HTMLImageElement).src = "assets/img/camiseta.jpg"
  }
  clickChinelo() {
    (document.getElementById('image') as HTMLImageElement).src = "assets/img/chinelo.png"
  }
  ngOnInit() {
  }

}

