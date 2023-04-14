import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child/child.component';
import { TranscludeToChildComponent } from './transclude-to-child/transclude-to-child.component';
import { BaseComponent } from './BaseComponent';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ChildComponent, TranscludeToChildComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent extends BaseComponent {
  override name = 'App';

  constructor() {
    super();
    console.log(this.name + ' constructor');
  }
}
