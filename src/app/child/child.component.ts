import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsideChildComponent } from './inside-child/inside-child.component';
import { BaseComponent } from '../BaseComponent';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule, InsideChildComponent],
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent extends BaseComponent {
  override name = 'Child';
  constructor() {
    super();
    console.log(this.name + ' constructor');
  }
}
