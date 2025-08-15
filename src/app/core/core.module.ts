import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ShellComponent } from './layout/shell/shell.component';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, ShellComponent],
  imports: [CommonModule, RouterModule],            // RouterModule needed for router-outlet in Shell
  exports: [NavbarComponent, FooterComponent, ShellComponent]  // 👈 export Shell
})
export class CoreModule {}
