import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LolCharactersComponent } from './pages/lol-characters/lol-characters.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'lol-characters', component: LolCharactersComponent }
];