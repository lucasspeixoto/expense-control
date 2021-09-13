import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, take } from 'rxjs/operators';
import { User } from 'src/app/auth/models/user.model';
import * as fromRoot from '../../../app.reducer';
import { IncomeExpenseService } from '../../services/income-expense.service';
@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
	user$: Observable<User>;
	constructor(
		private store: Store<fromRoot.AppState>,
		private incomeExpenseService: IncomeExpenseService,
	) {}

	ngOnInit(): void {
		this.store
			.select(fromRoot.getIsAuth)
			.pipe(
				filter(user => user !== null),
				take(1),
			)
			.subscribe((user: User) => {
				this.incomeExpenseService.initIncomeExpenseListener(user.userId)
        .subscribe(items => console.log(items))
			});
	}
}
