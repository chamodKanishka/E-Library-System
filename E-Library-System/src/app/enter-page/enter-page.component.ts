import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { User } from '../model/user';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-enter-page',
  templateUrl: './enter-page.component.html',
  styleUrls: ['./enter-page.component.css']
})
export class EnterPageComponent implements OnInit {

  // emailFormControl = new FormControl('', [
  //   Validators.required,
  //   Validators.email,
  // ]);

  errMessageReg='';
  incorrectPassword=false;
  isAdmin=false;
  user:User=new User();

  constructor(private userService:UserService,private router: Router) { }

  ngOnInit(): void {
    
  }

  submitData(){
    if(this.isAdmin){
      this.userService.accAdminLogin(this.user).subscribe((result)=>{
        if(result.message==='Admin Login Sucessfull'){
          localStorage.setItem('token',result.token)
          this.router.navigate(['/admin/addbooks'])
        }
      },(err)=>{
        if(err.error.message==='Incorrect Password'){
          this.incorrectPassword=true;
        }
      })
    }else{
      // console.log(this.user)
      this.userService.accStudentLogin(this.user).subscribe((result)=>{
        // console.log(result)
        if(result.message==='Student Login Sucessfull'){
          localStorage.setItem('token',result.token)
          this.router.navigate(['/home'])
        }
      },(err)=>{
        if(err.error.message==='Incorrect Password'){
          this.incorrectPassword=true
        }
      })
    }
  }

  registerData(){
    // console.log(this.user)
    this.userService.accStudentRegister(this.user).subscribe((result)=>{
      // console.log(result)
      if(result.message==='Student Registration Sucessfull'){
      
        this.errMessageReg=result.message
      }
    },(err)=>{
     this.errMessageReg=err.error.error
    })
  }


}  
