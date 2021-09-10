import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {
	AngularFirestore,
	AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Router } from '@angular/router';

import { AuthData } from '../models/auth-data.model';
import { User } from '../models/user.model';

@Injectable()
export class AuthService {
	constructor(
		private router: Router,
		private angularFireAuth: AngularFireAuth,
		private angularFirestore: AngularFirestore,
	) {}

	setUserLocally(user: User) {
		localStorage.setItem('user', JSON.stringify(user));
	}

	removeUserLocally() {
		localStorage.removeItem('user');
	}

	/* initAuthListener() {
		this.angularFireAuth.authState.subscribe(user => {
			if (user) {
				this.store.dispatch(new Auth.SetAuthenticated());
				this.router.navigate(['/training']);
			} else {
				this.trainingService.cancelSubscriptions();
				this.store.dispatch(new Auth.SetUnauthenticated());
				this.removeUserLocally();
				this.router.navigate(['/login']);
			}
		});
	} */

	registerUser(authData: AuthData) {
		//this.store.dispatch(new UI.StartLoading());
		//const {name, email, password} = authData;
		this.angularFireAuth
			.createUserWithEmailAndPassword(authData.email, authData.password)
			.then(result => {
				let user = {
					name: authData.name,
					userId: result.user.uid,
					email: result.user.email,
				};
				this.setUserData(user);
				this.setUserLocally(user);
				this.router.navigateByUrl('/');
				/* this.store.dispatch(new UI.StopLoading());
				this.uiService.showMessage('SignIn', 'X'); */
			})
			.catch(error => {
				/* this.store.dispatch(new UI.StopLoading());
				this.uiService.showMessage(error.message, 'X'); */
			});
	}

	login(authData: AuthData) {
		//this.store.dispatch(new UI.StartLoading());
		this.angularFireAuth
			.signInWithEmailAndPassword(authData.email, authData.password)
			.then(result => {
				let user = {
					userId: result.user.uid,
					email: result.user.email,
				};
				this.setUserLocally(user);
				/* this.store.dispatch(new UI.StopLoading());
				this.uiService.showMessage('Logged In', 'X'); */
			})
			.catch(error => {
				/* this.store.dispatch(new UI.StopLoading());
				this.uiService.showMessage(error.message, 'X'); */
			});
	}

	logout() {
		this.removeUserLocally();
		this.angularFireAuth.signOut();
	}

	setUserData(user: User) {
		const userRef: AngularFirestoreDocument<any> = this.angularFirestore.doc(
			`users/${user.userId}`,
		);
		const userData: User = {
			userId: user.userId,
			email: user.email,
		};
		return userRef.set(userData, { merge: true });
	}
}
