import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IncomeExpensesComponent } from './income-expenses/income-expenses.component';
import { StatisticsComponent } from './income-expenses/statistics/statistics.component';
import { DetailComponent } from './income-expenses/detail/detail.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth/auth.service';

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		RegisterComponent,
		DashboardComponent,
		IncomeExpensesComponent,
		StatisticsComponent,
		DetailComponent,
		NavbarComponent,
		SidebarComponent,
		FooterComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ReactiveFormsModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFireDatabaseModule,
		AngularFirestoreModule,
	],
	providers: [AuthService],
	bootstrap: [AppComponent],
})
export class AppModule {}
