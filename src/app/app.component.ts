import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRoot from './app.reducer';
import { AuthService } from './auth/services/auth.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	isLoading$: Observable<boolean>;

	constructor(
		private store: Store<fromRoot.AppState>,
		private authService: AuthService,
	) {}

	ngOnInit() {
		this.isLoading$ = this.store.select(fromRoot.getIsLoading);
		this.authService.initAuthListener();
	}
}
