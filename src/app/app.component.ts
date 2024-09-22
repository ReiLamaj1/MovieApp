import { Component } from '@angular/core';
import { RouterLink,RouterOutlet } from '@angular/router';
import { NavigationBarComponent } from './Components/navigation-bar/navigation-bar.component';
import { HomePageComponent } from "./pages/home-page/home-page.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationBarComponent, RouterLink, NavigationBarComponent, HomePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MovieApp';
}
