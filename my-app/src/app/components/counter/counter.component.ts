import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  value = 0;

  plus() {
    this.value++;
  }

  minus() {
    this.value--;
  }
}
