import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
	providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanLoad {
	constructor(private router: Router, private authService: AuthService) {}

	canActivate(): Observable<boolean> {
		return this.authService.isAuth().pipe(
			tap(user => {
				if (!user) {
					this.router.navigateByUrl('login');
				}
			}),
		);
	}

	canLoad(): Observable<boolean> {
		return this.authService.isAuth().pipe(
			tap(user => {
				if (!user) {
					this.router.navigateByUrl('login');
				}
			}),
			take(1),
		);
	}
}
