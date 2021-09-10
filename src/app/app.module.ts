import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IncomeExpensesComponent } from './income-expenses/income-expenses.component';
import { StatisticsComponent } from './income-expenses/statistics/statistics.component';
import { DetailComponent } from './income-expenses/detail/detail.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth/services/auth.service';
import { LoadingComponent } from './shared/components/loading/loading.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './app.reducer';

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
		LoadingComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ReactiveFormsModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFireDatabaseModule,
		AngularFirestoreModule,
		StoreModule.forRoot(reducers),
		StoreDevtoolsModule.instrument({
			maxAge: 25,
			logOnly: environment.production,
		}),
	],
	providers: [AuthService],
	bootstrap: [AppComponent],
})
export class AppModule {}
