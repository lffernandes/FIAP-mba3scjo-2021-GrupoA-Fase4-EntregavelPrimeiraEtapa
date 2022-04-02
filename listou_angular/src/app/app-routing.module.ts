import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeralComponent } from './pages/geral/geral.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path:'', component: HomeComponent, children: [
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
