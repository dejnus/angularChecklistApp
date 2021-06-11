import { Component, OnInit, Input } from '@angular/core';
import { Detail } from '../../interfaces/Detail';

@Component({
  selector: 'app-detail-item',
  templateUrl: './detail-item.component.html',
  styleUrls: ['./detail-item.component.css']
})
export class DetailItemComponent implements OnInit {

  @Input() detail!: Detail;

  constructor() { }

  ngOnInit(): void {
  }

}
