import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Detail } from '../../interfaces/Detail';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-detail',
  templateUrl: './add-detail.component.html',
  styleUrls: ['./add-detail.component.css']
})
export class AddDetailComponent implements OnInit {

  @Output() onAddDetail: EventEmitter<Detail> = new EventEmitter;

  parentId: number = 0;
  type: string = ""; //question, check, image
  header: string = "";
  header2: string = "";
  answer: string = "";
  answer2: string = "";
  checked: boolean = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.header){
      alert('Please add a question');
      return;
    }
    
    const newDetail: Detail= {
      parentId : this.parentId = Number(this.route.snapshot.paramMap.get('id')),
      type: "question",
      header: this.header
    }

    this.onAddDetail.emit(newDetail);

    this.header ='';
  }

}
