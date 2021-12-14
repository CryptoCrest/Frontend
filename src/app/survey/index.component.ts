import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/model/auth.service';
import { Survey } from '../model/survey.model';
import { SurveyRepository } from "../model/survey.repository";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  
})
export class IndexComponent {
  username:string;
  constructor(public auth: AuthService, private router: Router){
    this.username=auth.username;
   }

   surveyList(){
    this.router.navigateByUrl("survey/list");       
}
}