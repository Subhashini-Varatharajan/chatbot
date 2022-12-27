import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountGovernanceComponent } from './account-governance/account-governance.component';

const routes: Routes = [
  { path: '', component: AccountGovernanceComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
