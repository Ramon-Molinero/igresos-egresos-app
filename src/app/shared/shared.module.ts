import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [FooterComponent, NavbarComponent, SidebarComponent],
  imports: [CommonModule],
  exports: [FooterComponent, NavbarComponent, SidebarComponent],
})
export class SharedModule {}
