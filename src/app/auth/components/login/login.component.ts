import { Component, OnInit } from '@angular/core';

//* NgRx
import { Store } from '@ngrx/store';

//* Redux
import * as UI from '../../../shared/store/ui/ui.actions';
import * as fromRoot from '../../../app.reducer';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
	constructor(
		private store: Store<fromRoot.AppState>,
		private router: Router,
	) {}

	ngOnInit(): void {}

	onSubmit() {
		this.store.dispatch(UI.StartLoading());

		setTimeout(() => {
			this.router.navigateByUrl('/');
			this.store.dispatch(UI.StopLoading());
		}, 2500);
	}
}
