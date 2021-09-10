import { createAction } from '@ngrx/store';

export const START_LOADING = '[UI] Start Loading';
export const STOP_LOADING = '[UI] Stop Loading';

export const StartLoading = createAction('[UI] Start Loading');
export const StopLoading = createAction('[UI] Stop Loading');
