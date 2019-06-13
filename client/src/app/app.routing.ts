import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import components
import {AppComponent } from './app.component';
import {RegistrationComponent } from './components/registration/registration.component';
import {LoansComponent } from './components/loans/loans.component';

const appRoutes: Routes = [
    {path: 'registration', component: RegistrationComponent},
    {path: 'loans', component: LoansComponent},
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);