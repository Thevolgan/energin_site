import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ElectricalComponent } from './electrical/electrical/electrical.component';
import { HomeComponent } from './home/home/home.component';
import { AuthGuardsService } from './guards/auth-guards.service';


@NgModule({
  declarations: [
    AppComponent,
    ElectricalComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    
  ],
  providers: [
    AuthGuardsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
