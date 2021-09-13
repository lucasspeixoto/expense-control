import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../../auth/services/auth.service';

@Injectable({
	providedIn: 'root',
})
export class AuthGuard implements CanActivate {
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
}
