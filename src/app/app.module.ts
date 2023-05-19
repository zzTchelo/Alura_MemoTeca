import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { CreateThoughtComponent } from './component/thought/create-thought/create-thought.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThoughtListComponent } from './component/thought/thought-list/thought-list.component';
import { ThoughtCardComponent } from './component/thought/thought-card/thought-card.component';
import { HttpClientModule } from '@angular/common/http';
import { DeleteThoughtComponent } from './component/thought/delete-thought/delete-thought.component';
import { UpdateThoughtComponent } from './component/thought/update-thought/update-thought.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CreateThoughtComponent,
    ThoughtListComponent,
    ThoughtCardComponent,
    DeleteThoughtComponent,
    UpdateThoughtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
