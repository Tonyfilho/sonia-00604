import { Injectable } from '@angular/core';
import { getAuth, User } from 'firebase/auth';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Gmail {
  private auth = getAuth();
  private currentUser$ = new BehaviorSubject<User | null>(null);


  /**Metodo de para ver se estamos autenticado */
  isAuthenticated = (): boolean => {
    return this.currentUser$.value !== null;
  };

  /**Metodo que retorna usuário */
  getUser(): Observable<User | null> {
    return this.currentUser$.asObservable();
  }
}
