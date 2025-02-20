import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NotificationService } from '../../services/notification/notification.service';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { NotificationType } from '../../enum/notification-type.enum';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: false,
  
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit, OnDestroy{

  public showLoading:boolean = false;
  private subscriptions : Subscription[] =[];

  constructor(
      private router:Router,
      private authenticationService : AuthenticationService,
      private notificationService: NotificationService
    ){}

  ngOnInit(): void {

    if(this.authenticationService.isUserLoggedIn()){
      this.router.navigateByUrl('/user/management');  
    } else{
      this.router.navigateByUrl('/register');
    }
  }

  onRegister(user:User):void{
    this.showLoading = true;
    this.subscriptions.push(
      this.authenticationService.register(user).subscribe({
        next:
        (data:User) =>{
          this.showLoading = false;
          this.sendNotification(NotificationType.SUCCESS,`A new account was created for ${data.firstname}.`)
        },
        error:
        (errorResponse: HttpErrorResponse) =>{
          this.sendNotification(NotificationType.ERROR, errorResponse.error.message);
          this.showLoading = false;
        }
      })
    )
  }

  sendNotification(notificationType: NotificationType, message: string):void {
    if(message){
      this.notificationService.notify(notificationType,message);

    }else{
      this.notificationService.notify(notificationType, "AN ERROR OCCURED. PLEASE TRY AGAIN");
    }
    
  }
    
  ngOnDestroy(): void {
    this.subscriptions.forEach(
      sub => sub.unsubscribe()
    );
  }
    
  
}
