import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent, LogoComponent, AccountComponent } from '.';

@NgModule({
  declarations: [HeaderComponent, LogoComponent, AccountComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
