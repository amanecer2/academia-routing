import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {
  AbstractControl, FormArray,
  FormArrayName, FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ValidationErrors,
  Validators
} from "@angular/forms";

export const shaharValidator = (control: AbstractControl): ValidationErrors | null => {

  if (control.value !== 'shahar') {
    return {
      'not-my-name': true
    }
  }
  return  null
}

@Component({
  selector: 'app-login-reactive',
  templateUrl: './login-reactive.component.html',
  styleUrls: ['./login-reactive.component.css']
})
export class LoginReactiveComponent implements OnInit, AfterViewInit {

  @Input() user = {name: 'dsadsa', password: ''}
  myForm = new FormGroup({
    name: new FormControl(this.user.name, [Validators.required, shaharValidator, this.validator.bind(this)]),
    password: new FormControl(null, [Validators.required, shaharValidator]),
   // toppings: new FormArray([])
    toppings:this.formBuilder.array([])
    }
  )

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formBuilder.group({
      name: this.formBuilder.control('')
    })
  }

  ngAfterViewInit() {
    this.myForm.valueChanges.subscribe(res => {
      res
    })
  }

  onSubmit(myForm: any) {

  }

  validator(control: AbstractControl): ValidationErrors | null {

    return null
  }

  addTopping() {
    (this.myForm.get('toppings') as FormArray).push(new FormControl('hello', []))
  }

  getToppings(): AbstractControl[] {
    return (this.myForm.get('toppings') as FormArray).controls
  }
}
