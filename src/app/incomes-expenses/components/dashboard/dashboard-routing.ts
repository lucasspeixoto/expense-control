import { Routes } from '@angular/router';

import { IncomeExpensesComponent } from '../incomes-expenses/incomes-expenses.component';
import { StatisticsComponent } from '../statistics/statistics.component';
import { DetailComponent } from '../detail/detail.component';

export const dashboardRoutes: Routes = [
	{ path: '', component: StatisticsComponent },
	{ path: 'incomes-expenses', component: IncomeExpensesComponent },
	{ path: 'detail', component: DetailComponent },
];
