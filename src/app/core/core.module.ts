import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InstallationGuideComponent } from './home/installation-guide/installation-guide.component';
import { DesignPrinciplesComponent } from './home/design-principles/design-principles.component';
import { ContactInformationComponent } from './home/contact-information/contact-information.component';

@NgModule({
  declarations: [
    HomeComponent,
    PageNotFoundComponent,
    NavbarComponent,
    InstallationGuideComponent,
    DesignPrinciplesComponent,
    ContactInformationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [HomeComponent, PageNotFoundComponent, NavbarComponent]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
