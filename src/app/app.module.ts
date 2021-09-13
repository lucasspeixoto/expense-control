import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { DashboardComponent } from './incomes-expenses/components/dashboard/dashboard.component';
import { IncomeExpensesComponent } from './incomes-expenses/components/incomes-expenses/incomes-expenses.component';
import { StatisticsComponent } from './incomes-expenses/components/statistics/statistics.component';
import { DetailComponent } from './incomes-expenses/components/detail/detail.component';
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
import { CommonService } from './shared/services/common.service';
import { ForgotPasswordComponent } from './auth/components/forgot-password/forgot-password.component';
import { EffectsModule } from '@ngrx/effects';
import { TypePipe } from './incomes-expenses/pipes/type.pipe';
import { OrderPipe } from './incomes-expenses/pipes/order.pipe';

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
		ForgotPasswordComponent,
		TypePipe,
  OrderPipe,
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
		EffectsModule.forRoot([]),
	],
	providers: [AuthService, CommonService],
	bootstrap: [AppComponent],
})
export class AppModule {}
