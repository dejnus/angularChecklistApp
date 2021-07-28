import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Detail } from '../../interfaces/Detail';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-detail-item',
  templateUrl: './detail-item.component.html',
  styleUrls: ['./detail-item.component.css']
})
export class DetailItemComponent implements OnInit {

  @Input() detail!: Detail;
  @Output() onDeleteDetail: EventEmitter<Detail> = new EventEmitter;
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(detail: Detail) {
    if(confirm("Are you sure to delete - "+detail.header))
    this.onDeleteDetail.emit(detail);
  }
}
