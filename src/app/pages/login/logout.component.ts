import { Component, OnInit } from "@angular/core";
import { Router} from "@angular/router";

@Component({
  template: ''
})

export class LogoutComponent implements OnInit{

  constructor(private router: Router) {}

  ngOnInit() {
    sessionStorage.clear();

    this.router.navigateByUrl('/Login', { skipLocationChange: false}).then(()=> {
      this.router.navigate(['Login']);
      window.location.reload();
    })
  }
}
