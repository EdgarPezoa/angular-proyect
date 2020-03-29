import { Injectable } from '@angular/core';
import { APP_ENVIRONMENT } from '../../environments/environment';
import { EnvironmentInterface } from '../utils/interfaces/EnvironmentInterface';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {
  environmnet:EnvironmentInterface;
  constructor() { 
    this.environmnet = APP_ENVIRONMENT;
    console.log(this.environmnet);
  }
}
