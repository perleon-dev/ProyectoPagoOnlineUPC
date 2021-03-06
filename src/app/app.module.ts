import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagoPendienteComponent } from './pages/pago-pendiente/pago-pendiente.component';
import { MenuComponent } from './shared/menu/menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PagoOnlineComponent } from './pages/pago-online/pago-online.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { DemoNgZorroAntdModule } from './ng-zorro-antd.module';
import { LoginComponent } from './pages/login/login.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HistorialPagoComponent } from './pages/historial-pago/historial-pago.component';
import { EstadoCuentaComponent } from './pages/estado-cuenta/estado-cuenta.component';
import { RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';

registerLocaleData(en);

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])

@NgModule({
  declarations: [
    AppComponent,
    PagoPendienteComponent,
    MenuComponent,
    PagoOnlineComponent,
    HistorialPagoComponent,
    LoginComponent,
    FooterComponent,
    EstadoCuentaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DemoNgZorroAntdModule,
    FormsModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }, { provide: NZ_ICONS, useValue: icons }],
  bootstrap: [AppComponent]
})
export class AppModule { }
