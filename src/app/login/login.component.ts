import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from '../service/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  regclick: boolean = true
  
  email:any=''
  password=''




  
  constructor(private route:Router, private ds: AuthserviceService) { }

  ngOnInit(): void {

  }

  Visible() {
    if (this.regclick == true) {
      this.regclick = false
    }
    else {
      this.regclick = true
    }
  }

  register(){
    var name:any=this
  }




  login(){
    var email:any=this.email 
    var password:any=this.password
    this.ds.login(email,password)
    .subscribe((result:any)=>{
      localStorage.setItem("EMAIL:",JSON.stringify(result.currentemail))
      this.route.navigateByUrl('#')
    },(result)=>{
      alert(result.error.message)
    })
  }

  
  


}