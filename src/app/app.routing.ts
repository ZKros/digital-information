import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DigimonListComponent } from "./pages/digimon-list/digimon-list.component";
import { DigimonLoginComponent } from "./pages/digimon-login/digimon-login.component";

declare module "@angular/core" {
	interface ModuleWithProviders<T = any> {
		ngModule: Type<T>;
		providers?: Provider[];
	}
}


const DigimonRoutes: Routes = [
	{ path: '', component: DigimonLoginComponent },
	{ path: 'digimon-list', component: DigimonListComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(DigimonRoutes)
