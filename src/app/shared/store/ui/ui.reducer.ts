import { Action, createReducer, on } from '@ngrx/store';
import { StartLoading, StopLoading } from './ui.actions';

export interface UiState {
	isLoading: boolean;
}

const initialState: UiState = {
	isLoading: false,
};

const _uiReducer = createReducer(
	initialState,
	on(StartLoading, () => {
		return {
			isLoading: true,
		};
	}),
	on(StopLoading, () => {
		return {
			isLoading: false,
		};
	}),
);

export function uiReducer(state: UiState, action: Action) {
	return _uiReducer(state, action);
}

export const getIsLoading = (state: UiState) => state.isLoading;
