import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { SelectorPageComponent } from './pages/selectorPage/selectorPage.component';

export const routes: Routes = [
  {
    path: '',
    component: SelectorPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountriesRoutingModule {}
