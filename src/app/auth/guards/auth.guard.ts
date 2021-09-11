import { Injectable } from '@angular/core';
import {
	ActivatedRouteSnapshot,
	CanActivate,
	Route,
	Router,
	RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { take, tap } from 'rxjs/operators';

import * as fromRoot from '../../app.reducer';
import * as AUTH from '../../auth/store/auth.actions';
import { AuthService } from '../services/auth.service';

@Injectable({
	providedIn: 'root',
})
export class AuthGuard implements CanActivate {
	constructor(
		private store: Store<fromRoot.AppState>,
		private router: Router,
		private authService: AuthService,
	) {}

	canActivate(): Observable<boolean> {
		return this.authService.isAuth().pipe(
			tap(user => {
				if (!user) {
					this.router.navigateByUrl('login');
				}
			}),
		);
	}
}
