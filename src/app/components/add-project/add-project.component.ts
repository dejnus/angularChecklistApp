import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Project} from '../../interfaces/Project';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  @Output() onAddProject: EventEmitter<Project> = new EventEmitter;

  title!: string;
  name!: string;
  series!: number;
  finished: boolean = false;
  showAddTask!: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) {
      this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddTask = value));
   }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.title){
      alert('Please add a title');
      return;
    }
    const newProject: Project= {
      title: this.title,
      name: this.name,
      series: this.series,
      finished: false
    }

    this.onAddProject.emit(newProject);

    this.title ='';
    this.name='';
    this.series=0;
  }

}
