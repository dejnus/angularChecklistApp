import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string = 'Checklist APP';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toggleAddProject(){
    console.log('Toggle');
  }

  hasRoute(route: string){
    return this.router.url === route;
  }
}
