import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Project} from '../../interfaces/Project';

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
  constructor() { }

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
