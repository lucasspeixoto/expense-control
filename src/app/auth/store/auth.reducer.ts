import { Action, createReducer, on } from '@ngrx/store';
import { User } from '../models/user.model';
import { setUser, removeUser } from './auth.actions';

export interface AuthState {
	user: User;
}

export const initialState: AuthState = {
	user: null,
};

const _authReducer = createReducer(
	initialState,

	on(setUser, (state, props) => ({ ...state, user: { ...props.user } })),
	on(removeUser, state => ({ ...state, user: null })),
);

export function authReducer(state: AuthState, action: Action) {
	return _authReducer(state, action);
}
