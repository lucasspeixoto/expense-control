import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'type',
})
export class TypePipe implements PipeTransform {
	transform(value: string): string {
		if (value == 'income') {
      return 'Rendimento'
    } else {
      return 'Despesa'
    }
	}
}
