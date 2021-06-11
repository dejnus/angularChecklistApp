import { Component, OnInit } from '@angular/core';
import { ProjectService} from '../../services/project.service';
import { DetailService} from '../../services/detail.service';
import { Project } from '../../interfaces/Project';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  //projects: Project[] = [{title: "ABC", name:"bleh", series:"123"}];
  projects: Project[] = [];

  constructor(private projectService: ProjectService, private detailService: DetailService) { }

  ngOnInit(): void {
    this.projectService.getProjects().subscribe((projects) => this.projects = projects);
  }

  getProject (id: number){
    this.projectService.getProject(id).subscribe((project) => this.projects.push(project));
  }

  deleteProject (project: Project){
    this.projectService.deleteProject(project).subscribe(()=> (this.projects = this.projects.filter(p => p.id !== project.id)));
  }

  addProject(project: Project){
    this.projectService.addProject(project).subscribe((project)=> (this.projects.push(project)));
  }
  displayDetails(project: Project){
    console.log(project.id);
  }
}
