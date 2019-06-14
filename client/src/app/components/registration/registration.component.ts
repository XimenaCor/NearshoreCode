import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { global } from "../../services/global";
import { User } from "../../models/user";
import { UserService } from "../../services/user.service";
import { and } from '@angular/router/src/utils/collection';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [UserService]
})
export class RegistrationComponent implements OnInit {
  public user: User;
  public userAux: User;
  public url: string;
  public flag;

  constructor(
    private _route:ActivatedRoute,
    private _router:Router,
    private _userService:UserService,
  ) {
    this.url = global.url;
    this.user = new User();
    this.userAux = new User();
   }

  ngOnInit() {
    this.flag=true;
  }

  save(email){
    this._userService.save(email, this.user).subscribe(
      response => {
          this.userAux = response.data;
          console.log(this.userAux);
          console.log("saved");
      },
      error => {
        console.log(error);
      }
    );
    this.flag=false;
  }

  verifyLoan(){
    if((this.userAux.amount == 0) && (this.user.amount <= 50)){
      this._userService.verifyLoan(this.user, this.user.email).subscribe(
        response=>{
          console.log("amount updated");
          this.flag=true;
          sessionStorage.removeItem('userAux');         
        },
        error=>{
         console.log(error);
         this.flag=true;
         sessionStorage.removeItem('userAux');
        }
      )
    }else{
      if((this.userAux.amount.valueOf() + this.user.amount.valueOf())<=1000){
        this.user.amount=(this.userAux.amount.valueOf() + this.user.amount.valueOf());
        this._userService.verifyLoan(this.user, this.user.email).subscribe(
          response=>{
            console.log("amount updated");
            this.flag=true;
            sessionStorage.removeItem('userAux');         
          },
          error=>{
           console.log(error);
           this.flag=true;
           sessionStorage.removeItem('userAux');
          }
        )
      }else{
        console.log("We can not accept the loan");
        this.flag=true;
            sessionStorage.removeItem('userAux'); 
      }
    }    
  }

  // verifyLoan(){
  //   console.log(this.userAux.amount);
  //   if(this.userAux.amount == 0){     
  //     if(this.user.amount<=50){
  //       this._userService.verifyLoan(this.user, this.user.email).subscribe(
  //       response=>{
  //         console.log("amount updated");
  //         this.flag=true;
  //         sessionStorage.removeItem('userAux');
          
  //       },
  //       error=>{
  //        console.log(error);
  //        this.flag=true;
  //        sessionStorage.removeItem('userAux');
  //       }
  //     )
  //     }else{
  //       console.log("We can not accept the loan");
  //       this.flag=true;
  //         sessionStorage.removeItem('userAux');
  //     }      
  //   }else{
  //     console.log("We can not accept the loan");
  //     this.flag=true;
  //     sessionStorage.removeItem('userAux');
  //   }
    
  // }



 /* verifyEmail(email){
    this._userService.verifyEmail(email).subscribe(
      response=>{
        if(Object.keys(response.user).length != 0){
          console.log('user exists');
        }else{
          this.save(email);
        }
          
      },
      error=>{
        console.log(error);
      }
    );

  }*/
}
