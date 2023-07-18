import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangelangService {

  constructor() { }
  language = new BehaviorSubject<any>('TH');
  //behavior subject is used to store the value of the language

  changelanguage(temp:boolean){
    if(temp==true){
      this.language.next('ENG');
//using next to change the value in the behavior subject
    }else{
      this.language.next('TH');

    }
  }
}
