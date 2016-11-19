import { RouterModule, Routes } from '@angular/router';
import {ModuleWithProviders} from "@angular/core";
import {PageLandingComponent} from "./landing-page/page-landing.component";

const appRoutes: Routes = [
  { path: '', component: PageLandingComponent },
];

export const appRoutingProviders: any[] = [ ];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
