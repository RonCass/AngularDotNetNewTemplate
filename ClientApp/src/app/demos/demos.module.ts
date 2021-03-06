import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DemosRoutingModule } from './demos-routing.module';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { GridListAndPagingComponent } from './grid-list-and-paging/grid-list-and-paging.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { RoutingExamplesComponent } from './routing-examples/routing-examples.component';
import { DefaultRoutePageComponent } from './default-route-page/default-route-page.component';
import { RouteWithTokenComponent } from './route-with-token/route-with-token.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ChildRouterOutletComponent } from './child-router-outlet/child-router-outlet.component';
import { ChildRoute1Component } from './child-route1/child-route1.component';
import { ChildRoute2Component } from './child-route2/child-route2.component';
import { GridWithSortingAndPagingComponent } from './grid-with-sorting-and-paging/grid-with-sorting-and-paging.component';
import { SharedModule } from '../shared/shared.module';
import { AngularMaterialComponent } from './form-stuff/angular-material/angular-material.component';
import { LoggingComponent } from './logging/logging.component';
import { AuthExampleMainComponent } from './auth-example/auth-example-main.component';
import { ProtectedRouteComponent } from './auth-example/protected-route.component';
import { RcTableExampleComponent } from './rc-table-example/rc-table-example.component';
import { ReactiveFormExampleComponent } from './form-stuff/reactive-form-example/reactive-form-example.component';
import { TemplateFormExampleComponent } from './form-stuff/template-form-example/template-form-example.component';
import { StickyHeadersComponent } from './sticky-headers/sticky-headers.component';

@NgModule({
  imports: [
    CommonModule,
    DemosRoutingModule,
    FormsModule,
    ReactiveFormsModule,    
    SharedModule,
  ],
  declarations: [
    FileUploadComponent,
    GridListAndPagingComponent,
    CounterComponent,
    FetchDataComponent,
    RoutingExamplesComponent,
    DefaultRoutePageComponent,
    RouteWithTokenComponent,
    PageNotFoundComponent,
    ChildRouterOutletComponent,
    ChildRoute1Component,
    ChildRoute2Component,
    GridWithSortingAndPagingComponent,
    AngularMaterialComponent,
    LoggingComponent,
    AuthExampleMainComponent,
    ProtectedRouteComponent,
    RcTableExampleComponent,
    ReactiveFormExampleComponent,
    TemplateFormExampleComponent,
    StickyHeadersComponent,

  ]
})
export class DemosModule { }
