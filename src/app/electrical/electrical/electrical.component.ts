import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-electrical',
  templateUrl: './electrical.component.html',
  styleUrls: ['./electrical.component.css']
})
export class ElectricalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
