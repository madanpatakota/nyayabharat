import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterDirective } from './directives/counter.directive';

@NgModule({
  declarations: [CounterDirective],
  imports: [CommonModule],
  exports: [
    CommonModule,
    CounterDirective   // 👈 export so other modules can use [nbCounter]
  ]
})
export class SharedModule {}
