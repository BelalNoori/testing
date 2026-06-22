import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-greeting',
  standalone: true,
  imports: [],
  templateUrl: './greeting.component.html',
  styleUrl: './greeting.component.scss'
})
export class GreetingComponent {
  @Input() name = 'Welt';

  get message(): string {
    return `Hallo, ${this.name}!`;
  }
}
