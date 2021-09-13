import { Routes } from '@angular/router';

import { IncomeExpensesComponent } from './components/incomes-expenses/incomes-expenses.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { DetailComponent } from './components/detail/detail.component';

export const incomeExpenseRoutes: Routes = [
	{ path: '', component: StatisticsComponent },
	{ path: 'incomes-expenses', component: IncomeExpensesComponent },
	{ path: 'detail', component: DetailComponent },
];
