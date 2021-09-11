import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRoot from './app.reducer';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	isLoading$: Observable<boolean>;

	constructor(private store: Store<fromRoot.AppState>) {
		this.isLoading$ = this.store.select(fromRoot.getIsLoading);
	}
}
