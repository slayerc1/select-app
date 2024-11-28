import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesRoutingModule } from './countries-routing.module';

import { SelectorPageComponent } from './pages/selectorPage/selectorPage.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SelectorPageComponent],
  imports: [CommonModule, CountriesRoutingModule, ReactiveFormsModule],
})
export class CountriesModule {}
