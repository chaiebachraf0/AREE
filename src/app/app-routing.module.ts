import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ListingCounterComponent } from './components/listing-counter/listing-counter.component'
import { LoginComponent } from './components/login/login.component'

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'counter',
    component: ListingCounterComponent,
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
