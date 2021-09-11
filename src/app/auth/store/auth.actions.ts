import { createAction } from '@ngrx/store';

export const SET_AUTHENTICATED = '[Auth] Set Authenticated';
export const SET_UNAUTHENTICATED = '[Auth] Set Unauthenticated';

export const SetAuthenticated = createAction(SET_AUTHENTICATED);
export const SetUnauthenticated = createAction(SET_UNAUTHENTICATED);

/* import { createAction, props } from "@ngrx/store";
import { User } from "../models/user.model";

export const login = createAction(
  "[Login Page] User Login",
  props<{ user: User }>()
);

export const logout = createAction("[Sidebar] Logout"); */
