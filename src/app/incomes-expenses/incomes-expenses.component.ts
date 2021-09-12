import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IncomeExpense } from '../dashboard/models/income-expense.model';
import { Item } from '../dashboard/models/item.type';
import { IncomeExpenseService } from '../dashboard/services/income-expense.service';

@Component({
	selector: 'app-incomes-expenses',
	templateUrl: './incomes-expenses.component.html',
	styleUrls: ['./incomes-expenses.component.scss'],
})
export class IncomeExpensesComponent implements OnInit {
	incomeExpenseForm: FormGroup;
	type: Item = 'income';

	constructor(
		private formBuilder: FormBuilder,
		private incomeExpenseService: IncomeExpenseService,
	) {}

	ngOnInit(): void {
		this.incomeExpenseForm = this.formBuilder.group({
			description: ['', Validators.required],
			amount: ['', Validators.required],
		});
	}

	onSubmit() {
		const { description, amount } = this.incomeExpenseForm.value;
		const incomeExpense = new IncomeExpense(description, amount, this.type);
		this.incomeExpenseService.createIncomeOrExpense(incomeExpense);
	}
}
