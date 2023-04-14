import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from 'src/app/BaseComponent';

@Component({
  selector: 'app-inside-transclude-to-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inside-transclude-to-child.component.html',
  styleUrls: ['./inside-transclude-to-child.component.scss'],
})
export class InsideTranscludeToChildComponent extends BaseComponent {
  override name = 'Inside Transclude to Child';
  constructor() {
    super();
    console.log(this.name + ' constructor');
  }
}
