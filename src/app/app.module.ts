import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FormsModule  } from '@angular/forms';

import { environment } from './../environments/environment';

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

import { ChatMemberComponent } from './components/chat-member/chat-member.component';
import { ChatListComponent } from './components/chat-list/chat-list.component';
import { ChatBoxComponent } from './components/chat-box/chat-box.component';
import { ChatAreaComponent } from './components/chat-area/chat-area.component';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faBell,faTimes,faMobileAlt,faBox,
faSignOutAlt, faUserFriends, faClipboardList, faUserPlus,
faCodeBranch, faFile, faLink } from '@fortawesome/free-solid-svg-icons';
import { faStar , faComments } from '@fortawesome/free-regular-svg-icons';
import { ProjectTaskComponent } from './components/project-task/project-task.component';
import { ActionButtonsComponent } from './components/action-buttons/action-buttons.component';
import { TaskComponent } from './components/project/task/task.component';
import { TaskListComponent } from './components/project/task-list/task-list.component';
import { NgInitDirective } from './directives/ng-init.directive';

library.add(faTimes);
library.add(faComments);
library.add(faBell);
library.add(faMobileAlt);
library.add(faStar);
library.add(faBox);
library.add(faSignOutAlt);
library.add(faUserFriends);
library.add(faClipboardList);
library.add(faUserPlus);
library.add(faCodeBranch);
library.add(faFile);
library.add(faLink);


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
    ProjectTaskComponent,
    ChatMemberComponent,
    ChatListComponent,
    ChatBoxComponent,
    ChatAreaComponent,
    ActionButtonsComponent,
    TaskComponent,
    TaskListComponent,
    NgInitDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
