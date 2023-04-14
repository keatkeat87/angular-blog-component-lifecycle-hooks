import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from '../BaseComponent';
import { InsideTranscludeToChildComponent } from './inside-transclude-to-child/inside-transclude-to-child.component';

@Component({
  selector: 'app-transclude-to-child',
  standalone: true,
  imports: [CommonModule, InsideTranscludeToChildComponent],
  templateUrl: './transclude-to-child.component.html',
  styleUrls: ['./transclude-to-child.component.scss'],
})
export class TranscludeToChildComponent extends BaseComponent {
  override name = 'Transclude to Child';
  constructor() {
    super();
    console.log(this.name + ' constructor');
  }
}
