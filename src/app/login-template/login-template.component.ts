import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

interface User {
  name: string | null;
  password: string | null;
}
@Component({
  selector: 'app-login-template',
  templateUrl: './login-template.component.html',
  styleUrls: ['./login-template.component.css']
})
export class LoginTemplateComponent implements OnInit, AfterViewInit {

  @ViewChild('myForm') private myForm?: NgForm;


  @Input() user: User = {
    name: null,
    password: null
  }
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.myForm?.form.valueChanges.subscribe(res => {
      console.log(res)
    })

    //this.myForm?.form.
  }

  onSubmit(myForm: NgForm) {
    debugger
  }
}
