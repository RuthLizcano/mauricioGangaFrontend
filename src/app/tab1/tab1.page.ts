import { Component, OnInit } from '@angular/core';
import { ClienteApiService } from '../services/cliente-api.service';
import { LoadingController } from '@ionic/angular';
import { element } from 'protractor';
import { Router } from "@angular/router";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor(private router: Router) { }
  ngOnInit() {
  }

  consultAcc() {
    this.router.navigateByUrl('buscaracc');
  }
  consultRopa(){
    this.router.navigateByUrl('buscarropa');
  }

  consultElect(){
    this.router.navigateByUrl('buscarelect');
  }

  consultTec(){
    this.router.navigateByUrl('buscartec');
  }
  consultCarrito(){
    this.router.navigateByUrl('carrito');
  }

}


