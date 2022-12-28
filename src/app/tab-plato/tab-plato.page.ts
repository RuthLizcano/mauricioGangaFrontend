import { Component, OnInit } from '@angular/core';
import { ClienteApiService } from '../services/cliente-api.service';
import { LoadingController } from '@ionic/angular';
import { Router } from "@angular/router";

@Component({
  selector: 'app-tab-plato',
  templateUrl: './tab-plato.page.html',
  styleUrls: ['./tab-plato.page.scss'],
})
export class TabPlatoPage implements OnInit {
  res=[];
  newsList=[];
  favItem=[];
  plato=[];

  constructor(private miService: ClienteApiService, private loding: LoadingController, private router: Router) {}

  ngOnInit(){
    if(localStorage.getItem('newFav')){


    }else{
      localStorage.setItem('newFav', JSON.stringify(this.favItem));
    }
    if(localStorage.getItem('detPla')){ }else{ localStorage.setItem('detPla', JSON.stringify(this.plato));  }
   this.callres();
  }
  async callres(){
    const load=await this.loding.create({
      message:"Cargando",
    });
    await load.present();
    this.miService.getElectrodomestico().subscribe(response=>{
      response.answer.forEach(element=>{
        element.isFav=false;

      });
      console.log(response.answer);

      this.res=response.answer;
        // eslint-disable-next-line @typescript-eslint/prefer-for-of
        for (let i = 0; i < this.res.length; i++) {
          if(this.res[i].calificación>=5){
              this.newsList.push(this.res[i]);
          }
        }
        console.log(this.newsList);
      load.dismiss();
    });
  }
  logo(){
    console.log('entro');
    this.router.navigateByUrl('tabs');
  }
  addFav(item: any){
    this.favItem=JSON.parse(localStorage.getItem('newFav'));
    item.isFav=true;
    this.favItem.push(item);
    localStorage.setItem('newFav', JSON.stringify(this.favItem));
    console.log(this.favItem);
  }
  detailPla(item){
    this.add(item);
    this.router.navigateByUrl('detailp');
  }
  add(item){
    this.plato=JSON.parse(localStorage.getItem('detPla'));
    this.plato=item;
    localStorage.setItem('detPla', JSON.stringify(this.plato));
    console.log(this.plato);
  }
}
