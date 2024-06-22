import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuColumnComponent } from './menu-column/menu-column.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuColumnComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pip_boy_BASIC';
}
