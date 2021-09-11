/* import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';

import { AuthService } from '../services/auth.service';
import { login, logout } from './auth.actions';

@Injectable()
export class AuthEffects {
	constructor(
		private actions$: Actions,
		private router: Router,
		private authService: AuthService,
	) {}

	login$ = createEffect(
		() =>
			this.actions$.pipe(
				ofType(login),
				tap(action => {
					console.log('login action');
					this.authService.getUserData(action.user.userId);
					//this.router.navigateByUrl('/');
				}),
			),
		{ dispatch: false },
	);

	logout$ = createEffect(
		() =>
			this.actions$.pipe(
				ofType(logout),
				tap(action => {
					this.authService.removeUserLocally();
					this.router.navigateByUrl('/login');
				}),
			),
		{ dispatch: false },
	);
} */
