import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { User } from 'src/app/auth/models/user.model';
import * as fromRoot from '../../../app.reducer';
import * as ITEMS from '../../store/income-expense.actions';
import { IncomeExpenseService } from '../../services/income-expense.service';
import { IncomeExpense } from '../../models/income-expense.model';
import { getIsAuth } from 'src/app/auth/store/auth.selectors';
@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
	user$: Observable<User>;
	subscriptions: Subscription = new Subscription();
	constructor(
		private store: Store<fromRoot.AppState>,
		private incomeExpenseService: IncomeExpenseService,
	) {}

	ngOnInit(): void {
		const getUser$ = this.store
			.select(getIsAuth)
			.pipe(filter((user: User) => user !== null))
			.subscribe((user: User) => {
				const getItems$ = this.incomeExpenseService
					.initIncomeExpenseListener(user.userId)
					.subscribe((items: IncomeExpense[]) => {
						this.store.dispatch(ITEMS.setItems({ items: items }));
					});
				this.subscriptions.add(getItems$);
			});
		this.subscriptions.add(getUser$);
	}

	ngOnDestroy() {
		this.subscriptions.unsubscribe();
	}
}
