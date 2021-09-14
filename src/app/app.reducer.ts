import { ActionReducerMap } from '@ngrx/store';

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
