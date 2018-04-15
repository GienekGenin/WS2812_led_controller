import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {SocketService} from './socket.service';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './intro/intro.component';

const appRoutes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'intro', component: IntroComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [SocketService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
