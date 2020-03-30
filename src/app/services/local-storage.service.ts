import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor() { 

  }

  aumentarCuenta():number{
    let localClicks = this.clicks;
    localClicks+=1;
    localStorage.setItem('clicks', localClicks.toString());
    return localClicks;
  }

  get clicks():number{
    let localClicks = JSON.parse(localStorage.getItem('clicks'));
    if(localClicks == null){
      return 0;
    }
    return localClicks;

  }

}
