import { Component, OnInit } from '@angular/core';
import { DetailService} from '../../services/detail.service';
import { ProjectService} from '../../services/project.service';
import { Detail } from '../../interfaces/Detail';
import { Project } from '../../interfaces/Project';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  details: Detail[] = [];
  project: Project = {title: "", name:"", series:0, finished:false};

  constructor(private detailService: DetailService, private projectService: ProjectService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.detailService.getDetailsForProject(id).subscribe((details)=> this.details = details);
    this.projectService.getProject(id).subscribe((project)=> this.project = project);
  }

  addDetail(detail: Detail){
    this.detailService.addDetail(detail).subscribe((detail)=> (this.details.push(detail)));
  }

  deleteDetail (detail: Detail){
    this.detailService.deleteDetail(detail).subscribe(()=> (this.details = this.details.filter(d => d.id !== detail.id)));
  }

}
