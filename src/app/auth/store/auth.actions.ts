import { createAction, props } from '@ngrx/store';
import { User } from '../models/user.model';

export const SET_USER_DATA = '[Auth] Set User Data';
export const REMOVE_USER_DATA = '[Auth] Remove User Data';

export const setUser = createAction(SET_USER_DATA, props<{ user: User }>());
export const removeUser = createAction(REMOVE_USER_DATA);
