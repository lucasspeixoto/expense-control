import { Action, createReducer, on } from '@ngrx/store';
import { IncomeExpense } from '../models/income-expense.model';
import { removeItems, setItems } from './income-expense.actions';

export interface IncomeExpenseState {
	items: IncomeExpense[];
}

export const initialState: IncomeExpenseState = {
	items: [],
};

const _incomeExpenseReducer = createReducer(
	initialState,
	on(setItems, (state, props) => ({ ...state, items: { ...props.items } })),
	on(removeItems, state => ({ ...state, items: [] })),
);

export function incomeExpenseReducer(
	state: IncomeExpenseState,
	action: Action,
) {
	return _incomeExpenseReducer(state, action);
}

export const getIncomeExpenseData = (state: IncomeExpenseState) => state.items;
