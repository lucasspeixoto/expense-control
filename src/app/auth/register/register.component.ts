import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
	registerForm: FormGroup;

	constructor(
		private formBuilder: FormBuilder,
		private authService: AuthService,
	) {}

	ngOnInit(): void {
		this.registerForm = this.formBuilder.group({
			name: ['', [Validators.required, Validators.minLength(3)]],
			email: [
				'',
				[Validators.required, Validators.email, Validators.minLength(11)],
			],
			password: [
				'',
				[Validators.required, Validators.minLength(3)],
			],
		});
	}

	onSubmit() {
		this.authService.registerUser({
			email: this.registerForm.value.email,
			password: this.registerForm.value.password,
		});
	}
}
