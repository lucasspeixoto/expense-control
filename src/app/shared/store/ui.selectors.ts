import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUi from './ui.reducer';

export const getUiState = createFeatureSelector<fromUi.UiState>('ui');
export const getIsLoading = createSelector(getUiState, fromUi.getIsLoading);
