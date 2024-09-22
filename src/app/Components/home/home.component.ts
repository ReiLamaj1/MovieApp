import { Component } from '@angular/core';
import { ChangeImageComponent } from '../change-image/change-image.component';
import { NewsComponent } from "../news/news.component";
import { ContactComponent } from "../contact/contact.component";
import { query } from '@angular/animations';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NewsComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
}
