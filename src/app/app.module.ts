import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectListItemComponent } from './components/project-list-item/project-list-item.component';
import { ProjectComponent } from './components/project/project.component';
import { AsideComponent } from './components/aside/aside.component';
import { AppRoutingModule, RoutingComponents  } from './app-routing.module';
import { CommentBlockComponent } from './components/comment-block/comment-block.component';
import { CommentBoxComponent } from './components/comment-box/comment-box.component';
import { CommentComponent } from './components/comment/comment.component';
import { ToolBlockComponent } from './components/tool-block/tool-block.component';
import { LoginComponent } from './components/login/login.component';
import { TeamComponent } from './components/team/team.component';
import { MemberComponent } from './components/member/member.component';
import { WorkSpaceComponent } from './components/work-space/work-space.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faBell,faTimes,faMobileAlt,faBox } from '@fortawesome/free-solid-svg-icons';
import { faStar , faComments } from '@fortawesome/free-regular-svg-icons';
import { ProjectCommentsComponent } from './components/project-comments/project-comments.component';
library.add(faTimes);
library.add(faComments);
library.add(faBell);
library.add(faMobileAlt);
library.add(faComments);
library.add(faStar);
library.add(faBox);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProjectListItemComponent,
    ProjectComponent,
    AsideComponent,
    RoutingComponents,
    CommentBlockComponent,
    CommentBoxComponent,
    CommentComponent,
    ToolBlockComponent,
    LoginComponent,
    TeamComponent,
    MemberComponent,
    WorkSpaceComponent,
    ProjectCommentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
