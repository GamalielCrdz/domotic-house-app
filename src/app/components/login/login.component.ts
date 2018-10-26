import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'ns-login',
  moduleId: module.id,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name = '';
  password = '';
  constructor(page: Page,
    private routerExtensions: RouterExtensions) {
    page.actionBarHidden =  true;
  }

  ngOnInit(): void { }

  login(): void {
    console.log("tap event ", "name: ",this.name, " pass: ", this.password);
    
    if(this.name === "demo" && this.password === "demodemo" ) {
      this.name = '';
      this.password = '';
      this.routerExtensions.navigate(['/actions'], {
        transition: {
            name: "slideTop",
            duration: 500,
            curve: "linear"
        }
      });
    }
  }
}
