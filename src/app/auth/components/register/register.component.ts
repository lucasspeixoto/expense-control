import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/shared/services/common.service';
import { AuthService } from '../../services/auth.service';

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
		public commonService: CommonService,
	) {}

	ngOnInit(): void {
		this.registerForm = this.formBuilder.group({
			name: ['', [Validators.required, Validators.minLength(3)]],
			email: [
				'',
				[Validators.required, Validators.email, Validators.minLength(11)],
			],
			password: ['', [Validators.required, Validators.minLength(3)]],
		});
	}

	onSubmit() {
		const { name, email, password } = this.registerForm.value;
		this.authService.registerUser({
			name: name,
			email: email,
			password: password,
		});
	}
}
