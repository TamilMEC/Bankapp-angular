import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { DepositComponent } from './deposit/deposit.component';
import { AccountdetailsComponent } from './accountdetails/accountdetails.component';
import { UsermenuComponent } from './usermenu/usermenu.component';
import { AmounttransferComponent } from './amounttransfer/amounttransfer.component';
import { TransactiondetailsComponent } from './transactiondetails/transactiondetails.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    WelcomepageComponent,
    WithdrawComponent,
    BrowserModule,
    HttpClientModule,
    DepositComponent,
    AmounttransferComponent,
    TransactiondetailsComponent,
    UsermenuComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
