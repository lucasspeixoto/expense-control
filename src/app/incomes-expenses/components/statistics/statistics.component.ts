import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import * as fromRoot from '../../../app.reducer';
import { IncomeExpense } from '../../models/income-expense.model';

import { MultiDataSet, Label } from 'ng2-charts';
import { getIncomeExpensesData } from '../../store/income-expense.selectors';
@Component({
	selector: 'app-statistics',
	templateUrl: './statistics.component.html',
	styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent implements OnInit {
	// * Statistics
	incomes: number = 0;
	expenses: number = 0;
	totalIncomes: number = 0;
	totalExpenses: number = 0;
	difference: number = 0;

	//* Chart
	public doughnutChartLabels: Label[] = ['Rendimentos', 'Despesas'];
	public doughnutChartData: MultiDataSet = [[]];

	constructor(private store: Store<fromRoot.AppState>) {}

	ngOnInit() {
		this.store
			.select(getIncomeExpensesData)
			.pipe(map(item => Object.values(item)))
			.subscribe((items: IncomeExpense[]) => this.getStatistics(items));
	}

	getStatistics(items: IncomeExpense[]) {
		items.forEach(item => {
			switch (item.type) {
				case 'income':
					this.totalIncomes += item.amount;
					this.incomes++;
					break;
				case 'expense':
					this.totalExpenses += item.amount;
					this.expenses++;
			}

			this.difference = this.totalIncomes - this.totalExpenses;
			this.doughnutChartData = [[this.totalIncomes, this.totalExpenses]];
		});
	}
}
