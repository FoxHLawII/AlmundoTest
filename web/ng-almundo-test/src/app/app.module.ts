import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ROUTES } from './app.routing';

import { AppComponent } from './app.component';
import { HotelsComponent } from './components/hotels/hotels.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { SidebarComponent } from './components/hotels/sidebar/sidebar.component';
import { HotelItemComponent } from './components/hotels/hotel-item/hotel-item.component';

import { APIInterceptor } from './util/api-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HotelsComponent,
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    HotelItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: APIInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
