import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

//* NgRx
import { Store } from '@ngrx/store';

//* Redux
import * as UI from '../../shared/store/ui/ui.actions';
import * as fromRoot from '../../app.reducer';
import { IncomeExpense } from '../models/income-expense.model';
import { AuthService } from 'src/app/auth/services/auth.service';

//* Mensagens
import Swal from 'sweetalert2';
import { AngularFireAuth } from '@angular/fire/auth';
import { map, take } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class IncomeExpenseService {
	constructor(
		private angularFireAuth: AngularFireAuth,
		private angularFirestore: AngularFirestore,
		private store: Store<fromRoot.AppState>,
		private authService: AuthService,
	) {}

	createIncomeOrExpense(item: IncomeExpense) {
		this.store.dispatch(UI.StartLoading());
		const userId = this.authService.user.userId;
		this.angularFirestore
			.collection(`users/${userId}/items`)
			.add({ ...item })
			.then(() => {
				this.store.dispatch(UI.StopLoading());
				Swal.fire({
					position: 'top-end',
					icon: 'success',
					title: 'Item Criado',
					text: `O item '${item.description}' foi criado com sucesso`,
				});
			})
			.catch(error => {
				this.store.dispatch(UI.StopLoading());
				Swal.fire({
					icon: 'error',
					title: `Erro na criação do item - ${error.code}`,
					text: `Tente novamente, caso o erro pesista contate o administrador`,
				});
			});
	}

	initIncomeExpenseListener(userId: string) {
		return this.angularFirestore
			.collection(`users/${userId}/items`)
			.snapshotChanges()
			.pipe(
				map(snapshot =>
					snapshot.map(doc => ({
						id: doc.payload.doc.id,
						...(doc.payload.doc.data() as IncomeExpense),
					})),
				),
			);
	}

	deleteIncomeExpenseItem(itemId: string) {
		const userId = this.authService.user.userId;
		return this.angularFirestore
			.doc(`users/${userId}/items/${itemId}`)
			.delete();
	}
}
