import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { global } from "../../services/global";
import { User } from "../../models/user";
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css'],
  providers: [UserService]
})
export class LoansComponent implements OnInit {
  public user: User;
  public url: string;

  constructor(
    private _route:ActivatedRoute,
    private _router:Router,
    private _userService:UserService,
  ) {
    this.url = global.url;
    this.user = new User();
   }

  ngOnInit() {
  }

  save(){
    this._userService.updateAmountFirstTime(this.user.email, this.user).subscribe(
      response => {
          //this.user = response.data;
          console.log(this.user);
          console.log("saved");
      },
      error => {
        console.log(error);
      }
    );
  }

  verifyEmail(){
    this._userService.verifyEmail(this.user.email).subscribe(
      response=>{
        if(Object.keys(response.user).length != 0){
          console.log('user exists');
          this.user.email = null;
        }else{
          this.save();
        }
      },
      error=>{
        console.log(error);
      }
    );

  }

}
