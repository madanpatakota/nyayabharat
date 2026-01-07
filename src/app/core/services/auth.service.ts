import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private readonly API = `${environment.apiBaseUrl}/api/auth`;

  // 🔐 Auth State
  private userSubject = new BehaviorSubject<any | null>(null);
  user$ = this.userSubject.asObservable();

  constructor(private http: HttpClient) {
    this.restoreUser();
  }

  // ===============================
  // LOGIN
  // ===============================
  login(payload: { userName: string; password: string }): Observable<any> {
    return new Observable(observer => {
      this.http.post(`${this.API}/login`, payload).subscribe({
        next: (res: any) => {
          // expected API response: { token, user }
          localStorage.setItem('token', res.Data.token);
          localStorage.setItem('user', JSON.stringify(res.Data.userName));

          this.userSubject.next(res.Data.userName);

          observer.next(res);
          observer.complete();
        },
        error: err => observer.error(err)
      });
    });
  }

  // ===============================
  // REGISTER
  // ===============================
  register(payload: {
    userName: string;
    email: string;
    password: string;
    userType: number;
  }): Observable<any> {
    return this.http.post(`${this.API}/register`, payload);
  }

  // ===============================
  // LOGOUT
  // ===============================
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.userSubject.next(null);
  }

  // ===============================
  // RESTORE USER (ON REFRESH)
  // ===============================
  private restoreUser(): void {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.userSubject.next(JSON.parse(storedUser));
    }
  }

  // ===============================
  // HELPERS
  // ===============================
  get isLoggedIn(): boolean {
    return !!this.userSubject.value;
  }

  get currentUser(): any {
    return this.userSubject.value;
  }
}
