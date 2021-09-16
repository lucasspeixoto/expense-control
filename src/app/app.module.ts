import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { StoreModule } from '@ngrx/store';
import { reducers } from './app.reducer';
import { CommonService } from './shared/services/common.service';

import { EffectsModule } from '@ngrx/effects';
import { AuthModule } from './auth/auth.module';
import { LoadingComponent } from './shared/components/loading/loading.component';
import { IncomeExpenseModule } from './incomes-expenses/income-expense.module';
@NgModule({
	declarations: [AppComponent, LoadingComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		AuthModule,
		IncomeExpenseModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFireDatabaseModule,
		AngularFirestoreModule,
		StoreModule.forRoot(reducers),
	/* 	StoreDevtoolsModule.instrument({
			maxAge: 25,
			logOnly: environment.production,
		}), */
		EffectsModule.forRoot([]),
	],
	providers: [CommonService],
	bootstrap: [AppComponent],
})
export class AppModule {}
