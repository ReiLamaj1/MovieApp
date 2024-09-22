import { Component } from '@angular/core';
import { NavigationBarComponent } from '../../Components/navigation-bar/navigation-bar.component';
import { HomeComponent } from '../../Components/home/home.component';
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NavigationBarComponent,HomeComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
