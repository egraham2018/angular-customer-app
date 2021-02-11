import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'filter-textbox',
  template: `
    Filter: <input type="text" [(ngModel)]="filter" />
  `
})
export class FilterTextboxComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  private _filter = '';
  @Input() get filter(): string {
    return this._filter;
  }

  set filter(val: string) {
    this._filter = val;
    this.changed.emit(this.filter);
  }

  @Output() changed: EventEmitter<string> = new EventEmitter<string>();


  constructor() {}

  ngOnInit() {

  }
}
