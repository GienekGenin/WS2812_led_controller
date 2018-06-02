import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {SocketService} from './socket.service';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import {IntroComponent} from './intro/intro.component';
import {LoginFormComponent} from './login-form/login-form.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {UserService} from './users.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {ColorPickerModule} from 'ngx-color-picker';
import {ColorComponent} from './color/color.component';

const appRoutes: Routes = [
  {path: 'header', component: HeaderComponent},
  {path: 'intro', component: IntroComponent},
  {path: 'board', component: DashboardComponent},
  {path: '', component: LoginFormComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroComponent,
    LoginFormComponent,
    DashboardComponent,
    ColorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    ColorPickerModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false} // <-- debugging purposes only
    )
  ],
  providers: [SocketService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
