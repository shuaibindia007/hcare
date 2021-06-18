import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cancelled-visits',
  templateUrl: './cancelled-visits.component.html',
  styleUrls: ['./cancelled-visits.component.scss']
})
export class CancelledVisitsComponent implements OnInit {
  public myDate;
  constructor() { 
    this.myDate = new Date();
  }

  ngOnInit() {
  }

}
