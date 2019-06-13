import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import components
import {AppComponent } from './app.component';
import {RegistrationComponent } from './components/registration/registration.component';

const appRoutes: Routes = [
    {path: 'registration', component: RegistrationComponent},
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);