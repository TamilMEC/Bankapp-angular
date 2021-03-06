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
import { AdminmenuComponent } from './adminmenu/adminmenu.component';
import { ActivateuserComponent } from './activateuser/activateuser.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListuserComponent } from './listuser/listuser.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomepageComponent,
    WithdrawComponent,
    DepositComponent,
    AccountdetailsComponent,
    AmounttransferComponent,
    TransactiondetailsComponent,
    UsermenuComponent,
    routingComponents,
    AdminmenuComponent,
    ActivateuserComponent,
    HomeComponent,
    ListuserComponent,
    DeleteuserComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
