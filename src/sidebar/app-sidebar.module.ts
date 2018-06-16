import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from './../shared';

// App Sidebar Component
import { AppSidebarFooterComponent } from './app-sidebar-footer.component';
import { AppSidebarFormComponent } from './app-sidebar-form.component';
import { AppSidebarHeaderComponent } from './app-sidebar-header.component';
import { AppSidebarMinimizerComponent } from './app-sidebar-minimizer.component';
import { AppSidebarComponent } from './app-sidebar.component';
import {
  AppSidebarNavComponent,
  AppSidebarNavDropdownComponent,
  AppSidebarNavDividerComponent,
  AppSidebarNavItemComponent,
  AppSidebarNavLinkComponent,
  AppSidebarNavTitleComponent,
  NavDropdownDirective,
  NavDropdownToggleDirective
} from './app-sidebar-nav.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    LayoutModule
  ],
  exports: [
    AppSidebarFooterComponent,
    AppSidebarFormComponent,
    AppSidebarHeaderComponent,
    AppSidebarMinimizerComponent,
    AppSidebarComponent,
    AppSidebarNavComponent,
    AppSidebarNavDropdownComponent,
    AppSidebarNavItemComponent,
    AppSidebarNavDividerComponent,
    AppSidebarNavLinkComponent,
    AppSidebarNavTitleComponent,
    NavDropdownDirective,
    NavDropdownToggleDirective,
    LayoutModule
  ],
  declarations: [
    AppSidebarFooterComponent,
    AppSidebarFormComponent,
    AppSidebarHeaderComponent,
    AppSidebarMinimizerComponent,
    AppSidebarMinimizerComponent,
    AppSidebarComponent,
    AppSidebarNavComponent,
    AppSidebarNavDropdownComponent,
    AppSidebarNavDividerComponent,
    AppSidebarNavItemComponent,
    AppSidebarNavLinkComponent,
    AppSidebarNavTitleComponent,
    NavDropdownDirective,
    NavDropdownToggleDirective
  ]
})
export class AppSidebarModule { }
