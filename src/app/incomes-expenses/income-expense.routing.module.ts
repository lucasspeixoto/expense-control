import { RouterModule, Routes } from '@angular/router';

import { IncomeExpensesComponent } from './components/incomes-expenses/incomes-expenses.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { DetailComponent } from './components/detail/detail.component';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const incomeExpenseRoutes: Routes = [
	{
		path: '',
		component: DashboardComponent,
		children: [
			{ path: '', component: StatisticsComponent },
			{ path: 'incomes-expenses', component: IncomeExpensesComponent },
			{ path: 'detail', component: DetailComponent },
		],
	},
];

@NgModule({
	declarations: [],
	imports: [RouterModule.forChild(incomeExpenseRoutes)],
	exports: [RouterModule],
})
export class IncomeExpenseRoutingModule {}
