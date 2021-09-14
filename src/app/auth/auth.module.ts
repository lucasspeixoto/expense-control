import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { RegisterComponent } from './components/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';

@NgModule({
	declarations: [LoginComponent, RegisterComponent, ForgotPasswordComponent],
	imports: [CommonModule, ReactiveFormsModule, RouterModule],
	providers: [AuthService],
})
export class AuthModule {}
