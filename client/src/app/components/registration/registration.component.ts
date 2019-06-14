import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { global } from "../../services/global";
import { User } from "../../models/user";
import { UserService } from "../../services/user.service";
import Swal from'sweetalert2';


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
          Swal.fire({
            toast: true,
            position: 'top-end',
            type: 'success',
            title: 'Amount Updated',
            showConfirmButton: false,
            timer: 1500
          });
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
      if((this.userAux.amount > 0) && (this.userAux.amount.valueOf() + this.user.amount.valueOf())<=1000){
        this.user.amount=(this.userAux.amount.valueOf() + this.user.amount.valueOf());
        this._userService.verifyLoan(this.user, this.user.email).subscribe(
          response=>{
            Swal.fire({
              toast: true,
              position: 'top-end',
              type: 'success',
              title: 'Amount Updated',
              showConfirmButton: false,
              timer: 1500
            });
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
        Swal.fire({
          toast: true,
          position: 'top-end',
          type: 'error',
          title: 'We can not accept the loan',
          showConfirmButton: false,
          timer: 1500
        });
        this.flag=true;
            sessionStorage.removeItem('userAux'); 
      }
    }    
  }
}
