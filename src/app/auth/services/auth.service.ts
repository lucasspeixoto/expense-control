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
import * as UI from '../../shared/store/ui/ui.actions';
import * as AUTH from '../../auth/store/auth.actions';
import * as fromRoot from '../../app.reducer';

import { map, take } from 'rxjs/operators';

import { AuthData } from '../models/auth-data.model';
import { User } from '../models/user.model';

//* Mensagens
import Swal from 'sweetalert2';
import { Title, Text } from '../../shared/messages/messages';

@Injectable()
export class AuthService {
	user: User;

	constructor(
		private router: Router,
		private angularFireAuth: AngularFireAuth,
		private angularFirestore: AngularFirestore,
		private store: Store<fromRoot.AppState>,
	) {}

	setUserLocally(user: User) {
		localStorage.setItem('user', JSON.stringify(user));
	}

	removeUserLocally() {
		localStorage.removeItem('user');
	}

	initAuthListener() {
		this.angularFireAuth.authState.subscribe(user => {
			if (user) {
				this.store.dispatch(AUTH.SetAuthenticated());
			} else {
				this.store.dispatch(AUTH.SetUnauthenticated());
				this.removeUserLocally();
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
				};
				this.setUserData(user);
				/* this.setUserLocally(user); */
				this.sendVerificationMail();
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
					icon: 'info',
					title: 'Cadastro realizado',
					text: 'Verifique sua caixa para confirmação do cadastro',
				});
				this.router.navigateByUrl('/login');
			});
	}

	login(authData: AuthData) {
		this.store.dispatch(UI.StartLoading());
		this.angularFireAuth
			.signInWithEmailAndPassword(authData.email, authData.password)
			.then(result => {
				this.getUserData(result.user.uid);
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
		console.log(provider);
		return this.angularFireAuth
			.signInWithPopup(provider)
			.then(result => {
				let user = {
					name: result.user.displayName,
					userId: result.user.uid,
					email: result.user.email,
				};
				this.setUserData(user);
				this.setUserLocally(user);
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
		this.removeUserLocally();
		this.angularFireAuth.signOut();
		this.router.navigateByUrl('/login');
	}

	getUserData(userId: string) {
		this.angularFirestore
			.collection(`users`)
			.valueChanges()
			.pipe(take(1))
			.subscribe((users: User[]) => {
				this.user = users.find((user: User) => user.userId === userId);
				this.setUserLocally(this.user);
			});
	}

	setUserData(user: User) {
		const userRef: AngularFirestoreDocument<User> = this.angularFirestore.doc(
			`users/${user.userId}`,
		);
		const userData: User = {
			name: user.name,
			userId: user.userId,
			email: user.email,
		};
		return userRef.set(userData, { merge: true });
	}
}
