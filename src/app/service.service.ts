import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable ,BehaviorSubject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private countryurl="assets/countries.json"
  constructor( private http:HttpClient) { }
  get_country():Observable<any>{
    return this.http.get(this.countryurl);
  }

  public title=new BehaviorSubject('Angular Template')

  setTitle(title:string){
    this.title.next(title);
  }

}
