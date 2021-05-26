import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './pages/hello/hello.component';
import { ByeComponent } from './pages/bye/bye.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ByeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
