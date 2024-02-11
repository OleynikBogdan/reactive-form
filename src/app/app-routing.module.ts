import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TamplateComponent } from './tamplate/tamplate.component';
import { ReactiveComponent } from './reactive/reactive.component';

const routes: Routes = [
  {
    path: 'tamplate',
    component: TamplateComponent
  },
  {
    path: 'reactive',
    component: ReactiveComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
