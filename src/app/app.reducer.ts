import {
	ActionReducerMap,
	createFeatureSelector,
	createSelector,
} from '@ngrx/store';

import * as fromUi from './shared/store/ui/ui.reducer';
import * as fromAuth from './auth/store/auth.reducer'
export interface AppState {
	ui: fromUi.UiState;
  auth: fromAuth.AuthState
}

export const reducers: ActionReducerMap<AppState> = {
	ui: fromUi.uiReducer,
  auth: fromAuth.authReducer,
};

export const getUiState = createFeatureSelector<fromUi.UiState>('ui');
export const getIsLoading = createSelector(getUiState, fromUi.getIsLoading);

export const getAuthState = createFeatureSelector<fromAuth.AuthState>('auth');
export const getIsAuth = createSelector(getAuthState, fromAuth.getIsAuth);

/* export const selectAuthState = createFeatureSelector<fromAuth.AuthState>('auth');
export const isLoggedIn = createSelector(selectAuthState, auth => !!auth.user);
export const isLoggedOut = createSelector(isLoggedIn, loggedIn => !loggedIn);
 */
