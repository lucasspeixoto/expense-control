import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './auth/components/forgot-password/forgot-password.component';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { dashboardRoutes } from './incomes-expenses/components/dashboard/dashboard-routing';
import { DashboardComponent } from './incomes-expenses/components/dashboard/dashboard.component';

const appRoutes: Routes = [
	{ path: 'login', component: LoginComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: 'forgot-password', component: ForgotPasswordComponent },
	{
		path: '',
		component: DashboardComponent,
		children: dashboardRoutes,
		canActivate: [AuthGuard],
	},

	{ path: '**', redirectTo: '' },
];

@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
