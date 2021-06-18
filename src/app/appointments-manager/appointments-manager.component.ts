import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointments-manager',
  templateUrl: './appointments-manager.component.html',
  styleUrls: ['./appointments-manager.component.scss']
})
export class AppointmentsManagerComponent implements OnInit {
  public Doclist = [];
  constructor() {
    this.Doclist = [
      {
        name: 'Dr Alisa Fox',
        profession: 'psychologist',
        address: 'Main Medical Centre.22 Sasten Pr, Paris',
        date: '31/08/2018',
        time: '04:35 PM',
        imgSrc: '../../../assets/doc1.png'
      },
      {
        name: 'Dr Edward Nortoos',
        profession: 'Dentist',
        address: 'Main Medical Centre18 Votelya Pr, Bordo',
        date: '02/09/2018',
        time: '05:20 PM',
        imgSrc: '../../../assets/doc2.png'
      },
      {
        name: 'Dr Maximus Capf',
        profession: 'Pedaitrician',
        address: 'Main Medical Centre.22 Sasten Pr, Paris',
        date: '05/09/2018',
        time: '03:15 PM',
        imgSrc: '../../../assets/doc3.png'
      }
    ]
   }

  ngOnInit() {
  }

}
