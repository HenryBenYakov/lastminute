import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { HomeComponent } from './components/layout/home/home.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { GridComponent } from './components/main/grid/grid.component';
import { CardComponent } from './components/main/card/card.component';
import { UserInputComponent } from './components/main/input/input.component';
import { SortPipe } from './pipes/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    GridComponent,
    CardComponent,
    UserInputComponent,
    FilterPipe,
    SortPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, NgxSliderModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
