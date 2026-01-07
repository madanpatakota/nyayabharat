import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loading = false;
  errorMessage = '';

  loginForm = this.fb.group({
    userName: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

 onLogin(): void {
  if (this.loginForm.invalid) {
    this.loginForm.markAllAsTouched();
    return;
  }

  this.loading = true;
  this.errorMessage = '';

  const payload = {
    userName: this.loginForm.get('userName')!.value!,
    password: this.loginForm.get('password')!.value!
  };

  this.authService.login(payload).subscribe({
    next: (res: any) => {
      localStorage.setItem('token', res.Data.token);
      this.router.navigate(['/']);
    },
    error: () => {
      this.errorMessage = 'Invalid username or password';
      this.loading = false;
    },
    complete: () => this.loading = false
  });
}

}
