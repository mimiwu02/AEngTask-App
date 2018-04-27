import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { ListService } from './services/list.service';
import { HomeComponent } from './home/home.component';
import { FruitListComponent } from './fruit-list/fruit-list.component';
import { VegetableListComponent } from './vegetable-list/vegetable-list.component';
import { SnackListComponent } from './snack-list/snack-list.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FruitListComponent,
    VegetableListComponent,
    SnackListComponent
  ],
  imports: [
    ChartsModule,
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
    { path: 'home', component: HomeComponent },
    { path: 'fruits', component: FruitListComponent },
    { path: 'vegetables', component: VegetableListComponent },
    { path: 'snacks', component: SnackListComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: '**', redirectTo: 'home', pathMatch: 'full'}
  ])
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
