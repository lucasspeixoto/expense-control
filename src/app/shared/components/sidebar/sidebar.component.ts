import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/auth/models/user.model';
import { AuthService } from 'src/app/auth/services/auth.service';
import { getIsAuth } from 'src/app/auth/store/auth.selectors';
import * as fromRoot from '../../../app.reducer';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
	user$: Observable<User>;

	constructor(
		private authService: AuthService,
		private store: Store<fromRoot.AppState>,
	) {}

	ngOnInit(): void {
		this.user$ = this.store.select(getIsAuth);
	}

	onLogout() {
		this.authService.logout();
	}
}
