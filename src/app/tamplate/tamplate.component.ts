import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tamplate',
  templateUrl: './tamplate.component.html',
  styleUrl: './tamplate.component.scss'
})
export class TamplateComponent {
degrees = ['low', 'medium', 'high', 'bachelor', 'docktor'];
engineerings = ['computer', 'medecine', 'fire-fighter', 'policeman', 'teacher'];
  person = {
    name: 'huanos',
    password:'123',
    mail:'123@gus.com',
    phone:'+12301230',
    gender:'male',
    degree: 'low',
    engineering:'computer'
    } 
  
 

  
  onSubmit(tamplateForm: NgForm): void{
    if (tamplateForm.valid) {
      console.log(this.person);
      console.log(tamplateForm); 
    }
  }
}
