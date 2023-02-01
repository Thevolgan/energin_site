import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElectricalComponent } from './electrical/electrical/electrical.component';
import { AuthGuardsService } from './guards/auth-guards.service';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  {path: 'electrical', component: ElectricalComponent, canActivate: [AuthGuardsService]},
  {path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
