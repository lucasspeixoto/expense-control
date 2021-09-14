import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DetailComponent } from './components/detail/detail.component';
import { IncomeExpensesComponent } from './components/incomes-expenses/incomes-expenses.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { OrderPipe } from './pipes/order.pipe';
import { TypePipe } from './pipes/type.pipe';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { IncomeExpenseRoutingModule } from './income-expense.routing.module';
import { ChartsModule } from 'ng2-charts';
import { StoreModule } from '@ngrx/store';
import { incomeExpenseReducer } from './store/income-expense.reducer';

@NgModule({
	declarations: [
		DashboardComponent,
		IncomeExpensesComponent,
		StatisticsComponent,
		DetailComponent,
		TypePipe,
		OrderPipe,
	],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		StoreModule.forFeature('incomeExpense', incomeExpenseReducer),
		ChartsModule,
		IncomeExpenseRoutingModule,
		RouterModule,
		SharedModule,
	],
	exports: [
		DashboardComponent,
		IncomeExpensesComponent,
		StatisticsComponent,
		DetailComponent,
	],
})
export class IncomeExpenseModule {}
