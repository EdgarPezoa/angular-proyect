import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  clicks:number;
  constructor(private localStorageService: LocalStorageService ) { }

  ngOnInit(): void {
    this.clicks = this.localStorageService.clicks;
  }

  aumentarClicks(){
    this.clicks = this.localStorageService.aumentarCuenta();
  }

}