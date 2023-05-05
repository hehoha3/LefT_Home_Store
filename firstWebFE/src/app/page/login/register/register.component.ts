import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import ValidateForm from 'src/app/common/validateForm';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  signupForm!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      user_name: ['', Validators.required],
      user_email: ['', Validators.required],
      user_password: ['', Validators.required],
      user_password2: ['', Validators.required],
    });
  }

  onSignup() {
    if (this.signupForm.valid) {
      // thực hiện việc logic để đăng ký
      console.log(this.signupForm.value);
    } else {
      // thực hiện việc logic để báo lỗi
      ValidateForm.validateAllForm(this.signupForm);
    }
  }
}
