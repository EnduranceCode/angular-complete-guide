import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styles: [`
    h3 {
      color: darkBlue;
    }
  `]
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;

  constructor() {
    setTimeout(() => { this.allowNewServer = true }, 3000);
  }

  ngOnInit(): void {
  }

}
