import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ClienteApiService {
  private url='https://backend-api-mauricio.herokuapp.com/v1/';
  //science&apiKey=
  constructor(private http: HttpClient) { }

  getAccesorios(): Observable<any>{
    return this.http.get(this.url+'accesorio');
  }
  getElectrodomestico(): Observable<any>{
    return this.http.get(this.url+'electrodomestico');
  }
  getRopa(): Observable<any>{
    return this.http.get(this.url+'ropa');
  }
  geTecnologia(): Observable<any>{
    return this.http.get(this.url+'tecnologia');
  }
  postUsu(data): Observable<any>{   
    return this.http.post(this.url+'restaurantes', data);
  }
}
