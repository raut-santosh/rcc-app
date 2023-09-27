import { Component, OnInit } from '@angular/core';
import { ApiService, AuthService } from 'src/app/services';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {

  model: any = {};
  rememberMe: boolean = false;
  returnUrl: any;

  constructor(private apiService: ApiService,private authService: AuthService, private router: Router, private route: ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      this.returnUrl = params['returnUrl'] || '/';
    });
  }

  ngOnInit() {
  }

  formSubmit(event: any){
    this.authService.login(this.model).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate([this.returnUrl]);
      },
      (error) => {
        console.log(error);
      }
    )
  }



}
