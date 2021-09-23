import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IncomeExpense } from '../../models/income-expense.model';
import { Item } from '../../models/item.type';
import { IncomeExpenseService } from '../../services/income-expense.service';

@Component({
	selector: 'app-incomes-expenses',
	templateUrl: './incomes-expenses.component.html',
	styleUrls: ['./incomes-expenses.component.scss'],
})
export class IncomeExpensesComponent implements OnInit {
	incomeExpenseForm: FormGroup;
	type: Item = 'income';

	categoryOptions: string[] = [
		'Moradia',
		'Alimentação',
		'Saúde',
		'Educação',
		'Despesas Pessoais',
		'Transporte',
		'Celular/TV/Internet',
		'Casa',
		'Carro',
		'Emergência',
		'Lazer',
	];

	frequencyOptions: string[] = [
    'Fixa',
    'Variável'
  ];

	constructor(
		private formBuilder: FormBuilder,
		private incomeExpenseService: IncomeExpenseService,
	) {}

	ngOnInit(): void {
		this.incomeExpenseForm = this.formBuilder.group({
			description: ['', Validators.required],
			amount: ['', Validators.required],
			category: ['', Validators.required],
			frequency: ['', Validators.required],
			date: [new Date(), Validators.required],
		});
	}

	onSubmit() {
		const { description, amount, category, frequency, date } =
			this.incomeExpenseForm.value;
		const incomeExpense = new IncomeExpense(
			description,
			amount,
			category,
			frequency,
			date,
			this.type,
		);
		this.incomeExpenseService.createIncomeOrExpense(incomeExpense);
	}
}
