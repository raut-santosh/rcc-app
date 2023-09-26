import { Component, OnInit } from '@angular/core';
import { ApiService, AuthService } from 'src/app/services';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {

  model: any = {};
  rememberMe: boolean = false;

  constructor(private apiService: ApiService,private authService: AuthService) { }

  ngOnInit() {}

  formSubmit(event: any){
    this.authService.login(this.model).subscribe(
      (response) => {
        console.log(response);
        this.getDataMasters()
      },
      (error) => {
        console.log(error);
      }
    )
  }

  getDataMasters(){
    this.apiService.callapi('GET_DATAMASTERS', {}, null, 'get').subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    )
  }

}
