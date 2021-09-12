import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IncomeExpensesComponent } from '../incomes-expenses/incomes-expenses.component';
import { StatisticsComponent } from './../incomes-expenses/statistics/statistics.component';
import { DetailComponent } from './../incomes-expenses/detail/detail.component';

export const dashboardRoutes: Routes = [
	{ path: '', component: StatisticsComponent },
	{ path: 'incomes-expenses', component: IncomeExpensesComponent },
	{ path: 'detail', component: DetailComponent },
];

/* @NgModule({
	imports: [RouterModule.forChild(dashboardRoutes)],
	exports: [RouterModule],
})
export class DashboardRoutingModule {}
 */
