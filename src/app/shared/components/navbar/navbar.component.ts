import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/auth/models/user.model';
import * as fromRoot from '../../../app.reducer';
@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
	user$: Observable<User>;

	constructor(private store: Store<fromRoot.AppState>) {}

	ngOnInit(): void {
		this.user$ = this.store.select(fromRoot.getIsAuth);
	}
}
