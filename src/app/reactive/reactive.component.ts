import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.scss'
})
export class ReactiveComponent {

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



  nameControl = new FormControl(this.person.name);
  passwordControl = new FormControl(this.person.password);
  mailControl = new FormControl(this.person.mail);
  genderControl = new FormControl(this.person.gender);
  phoneControl = new FormControl(this.person.phone);
  degreeControl = new FormControl(this.person.degree);
  engineeringControl = new FormControl(this.person.engineering);


  personForm = new FormGroup({
    name: this.nameControl,
    password: this.passwordControl,
    mail: this.mailControl,
    gender: this.genderControl,
    phone: this.genderControl,
    degree: this.degreeControl,
    engineering: this.engineeringControl
  })
  onSubmit(): void{
    console.log(this.personForm);
    console.log(this.personForm.value);
  }
}
