import { Pipe, PipeTransform } from '@angular/core';
import { IncomeExpense } from '../models/income-expense.model';

@Pipe({
	name: 'order',
})
export class OrderPipe implements PipeTransform {
	transform(items: IncomeExpense[]): IncomeExpense[] {
		return items.sort((item) => {
			if (item.type === 'income') {
				return -1;
			} else {
				return 1;
			}
		});
	}
}
