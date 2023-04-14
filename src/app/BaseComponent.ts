import {
  AfterContentInit,
  AfterViewInit,
  Component,
  OnInit,
} from '@angular/core';

@Component({ template: '' })
export class BaseComponent implements OnInit, AfterContentInit, AfterViewInit {
  name = 'Base';

  ngOnInit(): void {
    console.log(this.name + ' init');
  }

  ngAfterContentInit(): void {
    console.log(this.name + ' content init');
  }

  ngAfterViewInit(): void {
    console.log(this.name + ' view init');
  }
}
