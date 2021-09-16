import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {
	AngularFirestore,
	AngularFirestoreDocument,
} from '@angular/fire/firestore';
import firebase from 'firebase/app';

import { Router } from '@angular/router';

//* NgRx
import { Store } from '@ngrx/store';

//* Redux
import * as UI from '../../shared/store/ui.actions';
import * as AUTH from '../../auth/store/auth.actions';
import * as ITEMS from '../../incomes-expenses/store/income-expense.actions';
import * as fromRoot from '../../app.reducer';

import { map, take } from 'rxjs/operators';

import { AuthData } from '../models/auth-data.model';
import { User } from '../models/user.model';

//* Mensagens
import Swal from 'sweetalert2';
import { Title, Text } from '../../shared/messages/errors';

@Injectable()
export class AuthService {
	private _user: User;

	constructor(
		private router: Router,
		private angularFireAuth: AngularFireAuth,
		private angularFirestore: AngularFirestore,
		private store: Store<fromRoot.AppState>,
	) {}

	get user() {
		return this._user;
	}

	initAuthListener() {
		this.angularFireAuth.authState.subscribe(user => {
			if (user) {
				this.angularFirestore
					.doc(`users/${user.uid}`)
					.valueChanges()
					.pipe(take(1))
					.subscribe((databaseUser: User) => {
						const user = User.fromDataBase(databaseUser);
						this._user = user;
						this.store.dispatch(AUTH.setUser({ user }));
					});
			} else {
				this.store.dispatch(AUTH.removeUser());
				this.store.dispatch(ITEMS.removeItems());
				this.router.navigateByUrl('/login');
			}
		});
	}

	isAuth() {
		return this.angularFireAuth.authState.pipe(map(user => user != null));
	}

	registerUser(authData: AuthData) {
		this.store.dispatch(UI.StartLoading());
		const { name, email, password } = authData;
		this.angularFireAuth
			.createUserWithEmailAndPassword(email, password)
			.then(result => {
				let user = {
					name: name,
					userId: result.user.uid,
					email: result.user.email,
					photoUrl: null,
				};
				this.setUserData(user);
				this.sendVerificationMail();
				this.router.navigateByUrl('/');
				this.store.dispatch(UI.StopLoading());
			})
			.catch(error => {
				this.store.dispatch(UI.StopLoading());
				Swal.fire({
					icon: 'error',
					title: Title[error.code],
					text: Text[error.code],
				});
			});
	}

	async sendVerificationMail() {
		return await (await this.angularFireAuth.currentUser)
			.sendEmailVerification()
			.then(() => {
				Swal.fire({
					position: 'top-end',
					icon: 'info',
					title: 'Cadastro realizado',
					text: 'Verifique sua caixa com e-mail de confirmação',
				});
			});
	}

	login(authData: AuthData) {
		this.store.dispatch(UI.StartLoading());
		this.angularFireAuth
			.signInWithEmailAndPassword(authData.email, authData.password)
			.then(() => {
				this.router.navigateByUrl('/');
				this.store.dispatch(UI.StopLoading());
			})
			.catch(error => {
				this.store.dispatch(UI.StopLoading());
				Swal.fire({
					icon: 'error',
					title: Title[error.code],
					text: Text[error.code],
				});
			});
	}

	authLogin(provider) {
		return this.angularFireAuth
			.signInWithPopup(provider)
			.then(result => {
				console.log(result.user.photoURL)
				let user = {
					name: result.user.displayName,
					userId: result.user.uid,
					email: result.user.email,
					photoUrl: result.user.photoURL,
				};
				this.setUserData(user);
				this.router.navigateByUrl('/');
			})
			.catch(error => {
				Swal.fire({
					icon: 'error',
					title: Title[error.code],
					text: Text[error.code],
				});
			});
	}

	loginWithGoogle() {
		return this.authLogin(new firebase.auth.GoogleAuthProvider());
	}

	forgotPassword(email: string) {
		return this.angularFireAuth
			.sendPasswordResetEmail(email)
			.then(() => {
				Swal.fire({
					position: 'top-end',
					icon: 'info',
					title: 'E-mail enviado',
					text: 'O link para alteração foi enviado por e-mail, verifique sua caixa',
				});
			})
			.catch(error => {
				Swal.fire({
					icon: 'error',
					title: Title[error.code],
					text: Text[error.code],
				});
			});
	}

	logout() {
		this.store.dispatch(AUTH.removeUser());
		this.angularFireAuth.signOut();
		this.router.navigateByUrl('/login');
	}

	setUserData(user: User) {
		const userRef: AngularFirestoreDocument<User> = this.angularFirestore.doc(
			`users/${user.userId}`,
		);
		const userData: User = {
			name: user.name,
			userId: user.userId,
			email: user.email,
			photoUrl: user.photoUrl,
		};
		return userRef.set(userData, { merge: true });
	}
}
