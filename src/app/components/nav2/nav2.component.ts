import { Component } from '@angular/core';
import { language } from 'src/app/service/language';
import { ChangelangService } from 'src/app/service/changelang.service';

@Component({
  selector: 'app-nav2',
  templateUrl: './nav2.component.html',
  styleUrls: ['./nav2.component.css']
})
export class Nav2Component {constructor(public changelang: ChangelangService) {


} 

text = language.TH.navbar;

get_dataChangeLanguage(temp:any){
  if(temp=='TH'){
    this.text=language.TH.navbar;
  }else{
    this.text=language.ENG.navbar;
  }

}


temp=true //true eng, false eng
Translate(){
  if(this.temp==true){ 
    this.changelang.changelanguage(this.temp);
    this.get_dataChangeLanguage('ENG');
    sessionStorage.setItem('language','ENG');
    this.temp=false;}
  else if(this.temp==false){
    this.changelang.changelanguage(this.temp);
    this.get_dataChangeLanguage('TH');
    sessionStorage.setItem('language','TH');
    this.temp=true;
  }
}


}
