import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-detailc',
  templateUrl: './detailc.page.html',
  styleUrls: ['./detailc.page.scss'],
})
export class DetailcPage implements OnInit {

  newsList=[];
  constructor(private router: Router) { }

  ngOnInit() {
    if(localStorage.getItem('detail')){
      this.newsList.push(JSON.parse(localStorage.getItem('detail')));
      console.log(this.newsList[0].calificación);
    }
  }
  logo(){
    console.log('entro');
    this.router.navigateByUrl('tabs');
  }


}
