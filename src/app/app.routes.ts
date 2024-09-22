import { Routes} from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MoviesComponent } from './pages/home-page/movies/movies.component';
export const routes: Routes = [
    {path:'home', component:HomePageComponent},
    {path:'tvShows',component:MoviesComponent},
];

