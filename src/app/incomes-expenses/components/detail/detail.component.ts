import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../../app.reducer';
import * as ITEMS from '../../store/income-expense.actions';
import { IncomeExpenseService } from '../../services/income-expense.service';
import { IncomeExpense } from '../../models/income-expense.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//* Mensagens
import Swal from 'sweetalert2';
import { Title, Text } from '../../../shared/messages/errors';

@Component({
	selector: 'app-detail',
	templateUrl: './detail.component.html',
	styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
	incomesExpenses$: Observable<IncomeExpense[]>;
	constructor(
		private store: Store<fromRoot.AppState>,
		private incomeExpenseService: IncomeExpenseService,
	) {}

	ngOnInit(): void {
		this.incomesExpenses$ = this.store
			.select(fromRoot.getIncomeExpensesData)
			.pipe(map(item => Object.values(item)));
	}

	deleteItem(itemId: string) {
		this.incomeExpenseService
			.deleteIncomeExpenseItem(itemId)
			.then(() =>
				Swal.fire({
					position: 'top-end',
					icon: 'info',
					title: 'Item excluído',
					text: 'Item excluído com sucesso.',
				}),
			)
			.catch(error => {
        console.log(error)
				Swal.fire({
					icon: 'error',
					title: Title[error.code],
					text: Text[error.code],
				});
			});
	}
}
