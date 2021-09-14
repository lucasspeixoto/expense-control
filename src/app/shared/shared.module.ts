import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [NavbarComponent, SidebarComponent, FooterComponent],
	imports: [CommonModule, RouterModule, ReactiveFormsModule, ChartsModule],
	exports: [NavbarComponent, SidebarComponent, FooterComponent],
})
export class SharedModule {}
