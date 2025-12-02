import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module'; // 👈 path may vary

import { HeroComponent } from './hero/hero.component';
import { HomeComponent } from './pages/home/home.component'; // or your Home component
import { HomeRoutingModule } from './pages/home/home-routing.module';

@NgModule({
  declarations: [HeroComponent, HomeComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule   ,   // 👈 brings in CounterDirective
    HomeRoutingModule
  ]
})
export class HomeModule {}
