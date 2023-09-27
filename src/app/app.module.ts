import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard, AuthService, HelperService } from './services';
import { FormsModule } from '@angular/forms';
import { TokenInterceptor } from './services/api/token.interceptor';
import { HeaderComponent } from './layouts/header/header.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
@NgModule({
  declarations: [AppComponent, SidebarComponent, HeaderComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, HttpClientModule],
  providers: [AuthGuard,AuthService,HelperService, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true, // This is important for multiple interceptors
  },],
  bootstrap: [AppComponent],
})
export class AppModule {}
