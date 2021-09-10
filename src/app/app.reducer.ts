import {
	ActionReducerMap,
	createFeatureSelector,
	createSelector,
} from '@ngrx/store';

import * as fromUi from './shared/store/ui/ui.reducer';

export interface AppState {
	ui: fromUi.UiState;
}

export const reducers: ActionReducerMap<AppState> = {
	ui: fromUi.uiReducer,
};

export const getUiState = createFeatureSelector<fromUi.UiState>('ui');
export const getIsLoading = createSelector(getUiState, fromUi.getIsLoading);
