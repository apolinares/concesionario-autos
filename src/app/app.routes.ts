import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Autos } from './pages/cars/cars';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
    {path: '', component:Home},
    {path: 'nosotros', component:About},
    {path: 'automoviles', component:Autos},
    {path: 'contacto', component:Contact},
    {path: '**', redirectTo:''}
];
