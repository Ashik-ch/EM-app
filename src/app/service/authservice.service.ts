import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private http:HttpClient) { }

register(name:any, email:any,  dob:any, usecode:any, password:any,confirmpass:any)
{
  const data={
    name,
    email,
    dob,
    usecode,
    password,
    confirmpass
  }
  return this.http.post("http://localhost:3001/register",data)
}



  login(email: any, password: any) {
    const data={
      email,
      password
    }
    return this.http.post("http://localhost:3001/login", data)
  }
}
