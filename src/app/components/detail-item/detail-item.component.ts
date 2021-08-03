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
  value:string = "";
  showEditDetail: boolean = false;
  editButtonName: string = "Edit";
  showCancel: boolean = false;
  tempAnswer!: string;
  answer:string = 'test3';

  constructor() {
   }

  ngOnInit(): void {
    this.answer = this.detail.answer!;
  }

  onDelete(detail: Detail) {
    if(confirm("Are you sure to delete - "+detail.header))
    this.onDeleteDetail.emit(detail);
  }
  toggleEditDetail(){
    this.showEditDetail = !this.showEditDetail;
    this.showEditDetail ? this.editButtonName = "Accept" : this.editButtonName = "Edit";
    this.showCancel = !this.showCancel;
    if (this.showEditDetail == false){
      console.log("post");
    }
  }

  onCancel(detail: Detail){
    this.answer = this.detail.answer!;
    this.showEditDetail = !this.showEditDetail;
    this.showEditDetail ? this.editButtonName = "Accept" : this.editButtonName = "Edit";
    this.showCancel = !this.showCancel;
  }
}
