import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel 
import { AppComponent } from './app.component';
import { SchoolsComponent } from './schools/schools.component';
import { SchoolDetailComponent } from './school-detail/school-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SchoolsComponent,
    SchoolDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
