import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {

  newsList=[];
  constructor(private router: Router) {}

  ngOnInit(){
    if(localStorage.getItem('newFav')){
      this.newsList=JSON.parse(localStorage.getItem('newFav'));
    }
  }

  romoveItem(item){
    //item.url
    // eslint-disable-next-line no-underscore-dangle
    this.newsList=this.newsList.filter(el=>el._id !==item._id);
    localStorage.setItem('newFav',JSON.stringify(this.newsList));
  }

  logo(){
    console.log('entro');
    this.router.navigateByUrl('tabs');
  }

}
