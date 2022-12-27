import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountGovernanceComponent } from './account-governance/account-governance.component';
import { AsideMenuComponent } from './aside-menu/aside-menu.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { SearchTenantPipe } from './pipes/search-tenant.pipe';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    AccountGovernanceComponent,
    AsideMenuComponent,
    NavigationBarComponent,
    
    SearchTenantPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
