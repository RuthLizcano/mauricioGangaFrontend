import { Component, OnInit } from '@angular/core';
import { ClienteApiService } from '../services/cliente-api.service';
import { LoadingController } from '@ionic/angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from "@angular/router";


@Component({
  selector: 'app-tab6',
  templateUrl: './tab6.page.html',
  styleUrls: ['./tab6.page.scss'],
})
export class Tab6Page implements OnInit {

  
  newsList = [];
  favItem = [];
  detail = [];

  constructor(private miService: ClienteApiService, private loding: LoadingController, private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('newFav')) { } else {  localStorage.setItem('newFav', JSON.stringify(this.favItem));   }
    if (localStorage.getItem('detail')) { } else {  localStorage.setItem('detail', JSON.stringify(this.favItem));   }

    this.miService.geTecnologia().subscribe(response => {
      response.answer.forEach(element => {
        element.isFav = false;

      });
      console.log(response.answer);
      this.newsList = response.answer;
      console.log(this.newsList);
    });

  }

  async register() {
  }


  addFav(item: any){
    this.favItem=JSON.parse(localStorage.getItem('newFav'));
    item.isFav=true;
    this.favItem.push(item);
    localStorage.setItem('newFav', JSON.stringify(this.favItem));
    console.log(this.favItem);
  }
  detailRes(item){
    this.add(item);
    this.router.navigateByUrl('detailc');
  }
  add(item){
    this.detail=JSON.parse(localStorage.getItem('detail'));
    this.detail=item;
    localStorage.setItem('detail', JSON.stringify(this.detail));
    console.log(this.detail);
  }

}
