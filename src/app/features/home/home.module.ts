import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module'; // 👈 path may vary

import { HeroComponent } from './hero/hero.component'; // or your Home component

@NgModule({
  declarations: [HeroComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule      // 👈 brings in CounterDirective
  ]
})
export class HomeModule {}
