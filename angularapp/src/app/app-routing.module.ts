import { ByeComponent } from './pages/bye/bye.component';
import { HelloComponent } from './pages/hello/hello.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'AppComponent', pathMatch: 'full' },
  {
    path: 'hello',
    component: HelloComponent,
  },
  {
    path: 'bye',
    component: ByeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
