import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-column',
  standalone: true,
  imports: [],
  templateUrl: './menu-column.component.html',
  styleUrl: './menu-column.component.scss'
})
export class MenuColumnComponent {
  constructor() {}
  @Input() text: string = '';
  @Input() boxClass: string = '';
}
