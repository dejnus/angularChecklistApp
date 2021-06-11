import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectItemComponent } from './components/project-item/project-item.component';
import { FooterComponent } from './components/footer/footer.component';
import { DetailsComponent } from './components/details/details.component';
import { DetailItemComponent } from './components/detail-item/detail-item.component';
import { AddDetailComponent } from './components/add-detail/add-detail.component';

const appRoutes: Routes = [
  {path: '', component: ProjectsComponent},
   {path: 'details', component: DetailsComponent},
   {path: 'details/:id', component: DetailsComponent },
  
  //,
  //{path: 'about', component: AboutComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    AddProjectComponent,
    ProjectsComponent,
    ProjectItemComponent,
    FooterComponent,
    DetailsComponent,
    DetailItemComponent,
    AddDetailComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
