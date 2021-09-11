import { Action, createReducer, on } from '@ngrx/store';
import { SetAuthenticated, SetUnauthenticated } from './auth.actions';

export interface AuthState {
	isAuthenticated: boolean;
}

const initialState: AuthState = {
	isAuthenticated: false,
};

const _authReducer = createReducer(
	initialState,
	on(SetAuthenticated, () => {
		return {
			isAuthenticated: true,
		};
	}),
	on(SetUnauthenticated, () => {
		return {
			isAuthenticated: false,
		};
	}),
);

export function authReducer(state: AuthState, action: Action) {
	return _authReducer(state, action);
}

export const getIsAuth = (state: AuthState) => state.isAuthenticated;
/*
import { createReducer, on } from '@ngrx/store';
import { User } from '../models/user.model';

import { login, logout } from './auth.actions';

export interface AuthState {
	user: User;
}

export const initialAuthState: AuthState = {
	user: undefined,
};

export const authReducer = createReducer(
	initialAuthState,

	on(login, (state, action) => {
		return {
			user: action.user,
		};
	}),

	on(logout, (state, action) => {
		return {
			user: undefined,
		};
	}),
); */
