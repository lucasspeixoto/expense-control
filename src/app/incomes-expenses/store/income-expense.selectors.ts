import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromIncomeExpense from './income-expense.reducer';

export const getIncomeExpenseState =
	createFeatureSelector<fromIncomeExpense.IncomeExpenseState>('incomeExpense');
export const getIncomeExpensesData = createSelector(
	getIncomeExpenseState,
	fromIncomeExpense.getIncomeExpenseData,
);
