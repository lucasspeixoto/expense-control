import {
	ActionReducerMap,
	createFeatureSelector,
	createSelector,
} from '@ngrx/store';

import * as fromUi from './shared/store/ui.reducer';
import * as fromAuth from './auth/store/auth.reducer';

export interface AppState {
	ui: fromUi.UiState;
	auth: fromAuth.AuthState;
}

export const reducers: ActionReducerMap<AppState> = {
	ui: fromUi.uiReducer,
	auth: fromAuth.authReducer,
};

//* Selectors
/* export const getUiState = createFeatureSelector<fromUi.UiState>('ui');
export const getIsLoading = createSelector(getUiState, fromUi.getIsLoading); */

/* export const getAuthState = createFeatureSelector<fromAuth.AuthState>('auth');
export const getIsAuth = createSelector(getAuthState, fromAuth.getUserData);
 */
/* export const getIncomeExpenseState =
	createFeatureSelector<fromIncomeExpense.IncomeExpenseState>('incomeExpense');
export const getIncomeExpensesData = createSelector(
	getIncomeExpenseState,
	fromIncomeExpense.getIncomeExpenseData,
); */
