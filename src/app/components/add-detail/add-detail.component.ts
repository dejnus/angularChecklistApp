import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Detail } from '../../interfaces/Detail';
import { ActivatedRoute } from '@angular/router';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

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
  showAddDetail!: boolean;
  subscription: Subscription;
  showQuestion: boolean=false;
  showCheck: boolean=false;
  showImage: boolean=false;
  questionButtonName: string = "Question";
  checkButtonName: string = "Check";
  imageButtonName: string = "Image";

  constructor(private uiService: UiService, private route: ActivatedRoute) {
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddDetail = value));
   }

  ngOnInit(): void {
  }

  onSubmitQuestion(){
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
  onSubmitCheck(){
    if(!this.header){
      alert('Please add a question');
      return;
    }
    
    const newDetail: Detail= {
      parentId : this.parentId = Number(this.route.snapshot.paramMap.get('id')),
      type: "check",
      header: this.header
    }

    this.onAddDetail.emit(newDetail);

    this.header ='';
  }
  onSubmitImage(){
  }

  toggleQuestion(){
    this.showQuestion = !this.showQuestion;
    this.showQuestion ? this.questionButtonName = "Close" : this.questionButtonName = "Question";
  }
  toggleCheck(){
    this.showCheck = !this.showCheck;
    this.showCheck ? this.checkButtonName = "Close" : this.checkButtonName = "Check";
  }
  toggleImage(){
    this.showImage = !this.showImage;
    this.showImage ? this.imageButtonName = "Close" : this.imageButtonName = "Image";
  }

}
