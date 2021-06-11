import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../../interfaces/Project';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css']
})
export class ProjectItemComponent implements OnInit {

  @Input() project!: Project;
  @Output() onDeleteProject: EventEmitter<Project> = new EventEmitter;
  @Output() onSelectProject: EventEmitter<Project> = new EventEmitter;

  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(project: Project) {
    this.onDeleteProject.emit(project);
  }

  onSelect(project: Project) {
    this.onSelectProject.emit(project);
  }

}
