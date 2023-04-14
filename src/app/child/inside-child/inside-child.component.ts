import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from 'src/app/BaseComponent';

@Component({
  selector: 'app-inside-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inside-child.component.html',
  styleUrls: ['./inside-child.component.scss'],
})
export class InsideChildComponent extends BaseComponent {
  override name = 'Inside Child';
  constructor() {
    super();
    console.log(this.name + ' constructor');
  }
}
