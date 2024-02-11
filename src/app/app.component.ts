import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'temp-drive';

  constructor(private router: Router){}

  goToTamplateForm(){
    this.router.navigate(['tamplate']);
  }
  goToReactiveForm(){
    this.router.navigate(['reactive']);
  }
}
