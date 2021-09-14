import { createAction } from '@ngrx/store';

export const START_LOADING = '[Loading] Start Loading';
export const STOP_LOADING = '[Loading] Stop Loading';

export const StartLoading = createAction(START_LOADING);
export const StopLoading = createAction(STOP_LOADING);
