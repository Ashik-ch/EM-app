import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from '../service/authservice.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  regclick: boolean = true



  registerform = this.fb.group({
    name: ['',[Validators.required]],
    dob: ['',[Validators.required]],
    email: ['',[Validators.required]],
    usecode: ['',[Validators.required]],
    confirmpass: ['',[Validators.required]],
    password: ['',[Validators.required]]
  })

  // registerform = this.fb.group({
  //   name: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
  //   dob: ['', [Validators.required]],
  //   email: [''],
  //   usecode: ['', [Validators.required, Validators.pattern('[0-9])*')]],
  //   confrimpass: ['', [Validators.required, Validators.pattern('[a-zA-Z],[0-9])*')]],
  //   password: ['', [Validators.required, Validators.pattern('[a-zA-Z],[0-9])*')]]
  // })


  constructor(private route: Router, private ds: AuthserviceService, private fb: FormBuilder) { }

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


  register() {
        
    var name = this.registerform.value.name
    var email = this.registerform.value.email
    var password = this.registerform.value.password
    var dob = this.registerform.value.dob
    var usecode = this.registerform.value.usecode
    var confirmpass = this.registerform.value.confirmpass

    if (this.registerform.valid) {
      this.ds.register(name, email, dob, usecode, password,confirmpass)
        .subscribe((result) => {

          console.log("REGISTERD-",name, email, dob, usecode, password,confirmpass);
          alert("REGISTER Successfull")

          console.log("RESULT-", result);
          

          if (result) {
            alert("Registration Successfull")
            this.route.navigateByUrl('')
          }
          else {
            alert("Registration Failed")
          }        }, (result) => {
          alert(result.error.message)
        })
    }
  }






  login() {
    var email = this.registerform.value.email
    var password = this.registerform.value.password
    this.ds.login(email, password)
      .subscribe((result: any) => {
        console.log('RESULT-',result);
        alert(result.message)
        
        localStorage.setItem("EMAIL:", JSON.stringify(result.currentemail))
        this.route.navigateByUrl('')
      }, (result) => {
        alert(result.error.message)
      })
  }
}
