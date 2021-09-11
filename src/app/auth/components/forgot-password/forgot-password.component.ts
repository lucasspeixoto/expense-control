import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/shared/services/common.service';
import { AuthService } from '../../services/auth.service';

@Component({
	selector: 'app-forgot-password',
	templateUrl: './forgot-password.component.html',
	styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
	forgotPasswordForm: FormGroup;

	constructor(
		private formBuilder: FormBuilder,
		private authService: AuthService,
		public commonService: CommonService,
	) {}

	ngOnInit(): void {
		this.forgotPasswordForm = this.formBuilder.group({
			email: [
				'',
				[Validators.required, Validators.email, Validators.minLength(11)],
			],
		});
	}

	onSubmit() {
		const { email } = this.forgotPasswordForm.value;
		this.authService.forgotPassword(email);
	}
}
