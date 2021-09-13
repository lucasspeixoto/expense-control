import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../../app.reducer';
import * as ITEMS from '../../store/income-expense.actions';
import { IncomeExpenseService } from '../../services/income-expense.service';
import { IncomeExpense } from '../../models/income-expense.model';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

@Component({
	selector: 'app-detail',
	templateUrl: './detail.component.html',
	styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
	incomesExpenses$: Observable<IncomeExpense[]>;
	constructor(private store: Store<fromRoot.AppState>) {}

	ngOnInit(): void {
		this.incomesExpenses$ = this.store
			.select(fromRoot.getIncomeExpensesData)
			.pipe(map(item => Object.values(item)));
	}
}
