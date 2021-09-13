import { createAction, props } from '@ngrx/store';
import { IncomeExpense } from '../models/income-expense.model';

export const SET_ITEMS = '[Income Expense] Set Items';
export const REMOVE_ITEMS = '[Income Expense] Remove Items';

export const setItems = createAction(
	SET_ITEMS,
	props<{ items: IncomeExpense[] }>(),
);

export const removeItems = createAction(REMOVE_ITEMS);
