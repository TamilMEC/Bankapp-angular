import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountdetailsComponent } from './accountdetails/accountdetails.component';
import { ActivateuserComponent } from './activateuser/activateuser.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminmenuComponent } from './adminmenu/adminmenu.component';
import { AmounttransferComponent } from './amounttransfer/amounttransfer.component';
import { AuthGuard } from './auth.guard';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import { DepositComponent } from './deposit/deposit.component';
import { HomeComponent } from './home/home.component';
import { ListuserComponent } from './listuser/listuser.component';
import { RegistrationComponent } from './registration/registration.component';
import { RoleGuard } from './role.guard';
import { TransactiondetailsComponent } from './transactiondetails/transactiondetails.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UsermenuComponent } from './usermenu/usermenu.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { WithdrawComponent } from './withdraw/withdraw.component';

const routes: Routes = [
  { path: 'welcomepage', component: WelcomepageComponent },
  { path: 'userlogin', component: UserloginComponent },
  { path: 'adminlogin', component: AdminloginComponent },
  { path: 'usermenu', component: UsermenuComponent , canActivate:[AuthGuard]},
  { path: 'registration', component: RegistrationComponent },
  { path: 'accountdetails', component: AccountdetailsComponent,canActivate:[AuthGuard] },
  { path: 'withdraw', component: WithdrawComponent ,canActivate:[AuthGuard]},
  { path: 'deposit', component: DepositComponent,canActivate:[AuthGuard] },
  { path: 'amounttransfer', component: AmounttransferComponent ,canActivate:[AuthGuard]},
  { path: 'home', component: HomeComponent },
  { path: 'transactiondetails', component: TransactiondetailsComponent, canActivate:[AuthGuard]},
  { path: 'adminmenu', component: AdminmenuComponent, canActivate:[AuthGuard,RoleGuard]},
  { path: 'activateuser', component: ActivateuserComponent, canActivate:[AuthGuard,RoleGuard]},
  { path: 'listuser' , component: ListuserComponent},
  { path: 'deleteuser' , component: DeleteuserComponent},
  { path: '', redirectTo: 'welcomepage', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[UserloginComponent,AdminloginComponent,RegistrationComponent,HomeComponent,AccountdetailsComponent,WithdrawComponent,DepositComponent,AmounttransferComponent,AccountdetailsComponent,TransactiondetailsComponent,UsermenuComponent,ListuserComponent,ActivateuserComponent,DeleteuserComponent]

