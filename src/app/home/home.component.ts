import { Component } from '@angular/core';
import { language } from 'src/app/service/language';
import { ChangelangService } from 'src/app/service/changelang.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})




export class HomeComponent {
  title = 'flexaver';

  constructor(public changelang: ChangelangService) {


  } 

  ngOnInit(): void {
    this.changelang.language.subscribe((data) => {
      this.get_dataChangeLanguage(data);
    })

  }
  
  text = language.TH.landingpage;
  
  get_dataChangeLanguage(temp:any){
    if(temp=='TH'){
      this.text=language.TH.landingpage;
    }else{
      this.text=language.ENG.landingpage;
    }
  
}

}
