import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardsService implements CanActivate{

  constructor() { }
  private isAuthenticated: boolean = false;

  canActivate(){
    return this.isAuthenticated;
  }
}
