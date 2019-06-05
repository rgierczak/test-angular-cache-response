import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstComponent } from './pages/first/first.component';
import { SecondComponent } from './pages/second/second.component';
import { ThirdComponent } from './pages/third/third.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'first'
  },
  {
    path: 'first',
    component: FirstComponent
  },
  {
    path: 'second',
    component: SecondComponent
  },
  {
    path: 'third',
    component: ThirdComponent
  },
  {
    path: '**',
    redirectTo: 'first'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
