import { Component } from '@angular/core';
import { HomePageComponent } from "../pages/home-page/home-page.component";
import { NavigationBarComponent } from "../Components/navigation-bar/navigation-bar.component";

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [HomePageComponent, NavigationBarComponent],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent {

}
