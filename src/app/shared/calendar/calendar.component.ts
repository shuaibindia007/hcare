import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  public minDate: Date = new Date ("01/01/2000");
  public maxDate: Date = new Date ("12/31/2030");
  public value: Date = new Date ();

  constructor() { }

  ngOnInit() {
  }

}
