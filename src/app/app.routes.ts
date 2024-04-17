import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';


export const routes: Routes = [

  {
    path: '',
    component: LayoutComponent
  },

  {
    path: '**', redirectTo: '',
  }

];

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled',
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
