import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageUserComponent } from './pages/page-user/page-user.component';
import { PageAdminComponent } from './pages/page-admin/page-admin.component';
import { UserComponent } from './pages/page-admin/user/user.component';
import { GlobalConfigComponent } from './pages/page-admin/global-config/global-config.component';

/**
 * アプリケーション本体
 */
@NgModule({
  declarations: [
    AppComponent,
    PageUserComponent,
    PageAdminComponent,
    UserComponent,
    GlobalConfigComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
