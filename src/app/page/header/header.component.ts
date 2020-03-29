import { Component, OnInit } from '@angular/core';
import { EnvironmentService } from 'src/app/services/environment.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  app_name:string;
  constructor(private environmentService: EnvironmentService) { 
    this.app_name = environmentService.environmnet.app_name;
  }

  ngOnInit(): void {
  }

}
