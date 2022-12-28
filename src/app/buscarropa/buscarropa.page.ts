import { Component, OnInit } from '@angular/core';
import { ClienteApiService } from '../services/cliente-api.service';
import { LoadingController } from '@ionic/angular';
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-buscarropa',
  templateUrl: './buscarropa.page.html',
  styleUrls: ['./buscarropa.page.scss'],
})
export class BuscarropaPage implements OnInit {

  res = [];
  newsList = [];
  favItem = [];

  constructor(private miService: ClienteApiService, private loding: LoadingController, private router: Router ) { }

  ngOnInit() {
    if (localStorage.getItem('newFav')) {
    } else {
      localStorage.setItem('newFav', JSON.stringify(this.favItem));
    }
  }

  async register(form) {
    this.miService.getRopa().subscribe(response => {
      response.answer.forEach(element => {
        element.isFav = false;

      });
      console.log(response.answer);
      this.newsList = response.answer;
      console.log(form.value.name);
      console.log(this.newsList[0].tipo);
      // eslint-disable-next-line @typescript-eslint/prefer-for-of
      for (let i = 0; i < this.newsList.length; i++) {
        // eslint-disable-next-line eqeqeq
        if (this.newsList[i].tipo==form.value.name) {
          this.res.push(this.newsList[i]);
        }
      }
      console.log(this.res);
    });
  }
  addFav(item: any){
    this.favItem=JSON.parse(localStorage.getItem('newFav'));
    item.isFav=true;
    this.favItem.push(item);
    localStorage.setItem('newFav', JSON.stringify(this.favItem));
    console.log(this.favItem);
  }

  general(){
    this.router.navigateByUrl('tabs');
  }

}
