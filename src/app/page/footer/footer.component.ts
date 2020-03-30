import { Component, OnInit } from '@angular/core';
import { EnvironmentService } from 'src/app/services/environment.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  app_name:string;
  constructor(private environmentService: EnvironmentService) { 
    this.app_name = environmentService.environmnet.app_name;
  }

  ngOnInit(): void {
  }

}
