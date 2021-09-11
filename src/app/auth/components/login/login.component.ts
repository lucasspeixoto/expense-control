import { Component, OnInit } from '@angular/core';

//* Redux
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/shared/services/common.service';
import { AuthService } from '../../services/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
	loginForm: FormGroup;

	constructor(
		private formBuilder: FormBuilder,
		public commonService: CommonService,
		private authService: AuthService,
	) {}

	ngOnInit(): void {
		this.loginForm = this.formBuilder.group({
			email: ['', [Validators.required, Validators.email]],
			password: ['', [Validators.required, Validators.minLength(3)]],
		});
	}

	onSubmit() {
		const { email, password } = this.loginForm.value;
		this.authService.login({
			email: email,
			password: password,
		});
	}

	loginWithGoogle() {
		this.authService.loginWithGoogle();
	}
}
