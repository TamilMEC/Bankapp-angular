import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountdetailsComponent } from './accountdetails/accountdetails.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AmounttransferComponent } from './amounttransfer/amounttransfer.component';
import { DepositComponent } from './deposit/deposit.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { TransactiondetailsComponent } from './transactiondetails/transactiondetails.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UsermenuComponent } from './usermenu/usermenu.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { WithdrawComponent } from './withdraw/withdraw.component';

const routes: Routes = [
  { path: 'welcomepage', component: WelcomepageComponent },
  { path: 'userlogin', component: UserloginComponent },
  { path: 'adminlogin', component: AdminloginComponent },
  { path: 'usermenu', component: UsermenuComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'accountdetails', component: AccountdetailsComponent },
  { path: 'withdraw', component: WithdrawComponent },
  { path: 'deposit', component: DepositComponent },
  { path: 'amounttransfer', component: AmounttransferComponent },
  { path: 'home', component: HomeComponent },
  { path: 'transactiondetails', component: TransactiondetailsComponent },
  { path: '', redirectTo: 'welcomepage', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[UserloginComponent,AdminloginComponent,RegistrationComponent,HomeComponent,AccountdetailsComponent,WithdrawComponent,DepositComponent,AmounttransferComponent,AccountdetailsComponent,TransactiondetailsComponent,UsermenuComponent]

